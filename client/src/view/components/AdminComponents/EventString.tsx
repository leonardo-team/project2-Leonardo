import { FC } from 'react';
import '../../../css/custom.css';
import { EventStringType } from '../../../types';
import { DELETE_EVENT_MUTATION } from '../../../mutations/eventsMutations';
import { EVENTS_QUERY } from '../../../queries/eventsQuery';
import { UPDATE_STATISTIC_MUTATION } from '../../../mutations/statisticMutation';
import { useMutation } from '@apollo/client';
import { STATISTIC_QUERY } from '../../../queries/statisticQuery';
import { selectStatistic } from '../../../store/selectors/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../../store/actions';

export const EventString: FC<EventStringType> = ({ event }) => {
  const { title, date, encashTickets, status, id } = event;
  const dispatch = useDispatch();
  let iClassName;

  switch (status) {
    case 'completed':
      iClassName = 'fas fa-check green-item';
      break;
    case 'canceled':
      iClassName = 'far fa-times-circle pink-item';
      break;
    default:
      iClassName = 'fas fa-hourglass-half green-item';
  }

  const [delEvent] = useMutation(DELETE_EVENT_MUTATION, {
    optimisticResponse: true,
    refetchQueries: [{ query: EVENTS_QUERY, variables: { date: '' } }],
    awaitRefetchQueries: true,
  });

  const [updateStatistic] = useMutation(UPDATE_STATISTIC_MUTATION, {
    optimisticResponse: true,
    refetchQueries: [{ query: STATISTIC_QUERY }],
    awaitRefetchQueries: true,
  });

  const statObj = useSelector(selectStatistic);

  const deleteEvent = () => {
    let completed = statObj.completed;
    let canceled = statObj.canceled;
    let planned = statObj.planned;

    switch (status) {
      case 'completed':
        completed -= 1;
        break;

      case 'canceled':
        canceled -= 1;
        break;

      default:
        planned -= 1;
    }

    updateStatistic({
      variables: {
        id: statObj.id,
        planned: planned,
        canceled: canceled,
        completed: completed,
      },
    });

    delEvent({ variables: { id: id } });
  };

  const CorrectEvent = () => {
    dispatch(actions.createCorrectedEvent(event));
    document.location.href = '/ShowBill.tsx';
  };

  return (
    <tr className="tr">
      <td>{title}</td>
      <td>{date}</td>
      <td>{encashTickets}</td>
      <td>
        <i className={iClassName}> </i>
      </td>
      <td>
        <button className="btn green" onClick={CorrectEvent}>
          <i className="material-icons">done</i>
        </button>

        <button className="btn red" onClick={deleteEvent}>
          <i className="material-icons">remove</i>
        </button>
      </td>
    </tr>
  );
};
