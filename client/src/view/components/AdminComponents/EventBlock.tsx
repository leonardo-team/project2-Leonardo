import { FC } from 'react';
import { actions } from '../../../store/actions';
import { useDispatch } from 'react-redux';

import '../../../css/custom.css';

export type EventBlockProps = {
  title: string
  stat?: number
}

export const EventBlock: FC<EventBlockProps> = ({ title, stat }) => {
  let eventTitle;
  let eventStyle;
  let eventIcon;
  switch (title) {
    case 'planned':
      eventTitle = 'Предстоящих мероприятий';
      eventStyle = 'small-box bg-yellow';
      eventIcon = 'far fa-calendar-check';
      break;

    case 'completed':
      eventTitle = 'Проведенных мероприятий';
      eventStyle = 'small-box bg-green';
      eventIcon = 'fas fa-sign-language';
      break;

    case 'canceled':
      eventTitle = 'Отмененных мероприятий';
      eventStyle = 'small-box bg-red';
      eventIcon = 'fas fa-microphone-alt-slash';
      break;

    default:
      eventTitle = 'Всего мероприятий';
      eventStyle = 'small-box bg-aqua';
      eventIcon = 'fas fa-chart-pie';
  }

  const dispatch = useDispatch();

  const selectEvents = () => {
    dispatch(actions.changeEventsTitle(title));
  };

  return (
    <div className='col l3 s6'>
      <div className={eventStyle}>
        <div className='inner'>
          <h3>{stat}</h3>
          <p>{eventTitle}</p>
        </div>
        <div className='icon'>
          <i className={eventIcon}> </i>
        </div>
        <div className='small-box-footer animsition-link' onClick={selectEvents}>More info
          <i className='fa fa-arrow-circle-down'> </i>
        </div>
      </div>
    </div>

  );
};
