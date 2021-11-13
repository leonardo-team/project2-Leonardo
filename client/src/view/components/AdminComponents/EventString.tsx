import { FC } from 'react';
import '../../../css/custom.css';
import { EventStringType } from '../../../types';

export const EventString: FC<EventStringType> = ({ title, date, tickets, status }) => {
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

  return (
    <tr>
      <td>{title}</td>
      <td>{date}</td>
      <td>{tickets}</td>
      <td>
        <i className={iClassName}> </i>
      </td>
      <td>
        <button className="btn green">
          <i className="material-icons">done</i>
        </button>

        <button className="btn red">
          <i className="material-icons">remove</i>
        </button>
      </td>
    </tr>
  );
};
