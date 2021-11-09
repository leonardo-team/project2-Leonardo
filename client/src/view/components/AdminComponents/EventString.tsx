import { FC } from 'react';
import '../../../css/custom.css';

export type EventStringProps = {
  title?: string
  date?: string
  ticket?: number
  status?: string
}

export const EventString: FC<EventStringProps> = ({ title, date, ticket, status }) => {
  let iClassName;

  switch (status) {
    case 'check':
      iClassName = 'fas fa-check green-item';
      break;
    case 'close':
      iClassName = 'far fa-times-circle pink-item';
      break;
    default:
      iClassName = 'fas fa-hourglass-half green-item';
  }

  return (
    <tr>
      <td>{title}</td>
      <td>{date}</td>
      <td>{ticket}</td>
      <td>
        <i className={iClassName}> </i>
      </td>
      <td>
        <button className='btn green'>
          <i className='material-icons'>done</i>
        </button>

        <button className='btn red'>
          <i className='material-icons'>remove</i>
        </button>
      </td>
    </tr>

  );
};
