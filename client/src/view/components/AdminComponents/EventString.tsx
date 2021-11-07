import { FC } from 'react';
import '/Frontend/education/HomeWork/FinalProject/project2-Leonardo/client/src/css/custom.css';

export type EventStringProps = {
  title?:string
  date?:string
  ticket?:number
  status?:string
}

export const EventString:FC<EventStringProps> = ({ title, date, ticket, status })=>{
  return (

        <tr>
        {
         status === 'check'
         && (
        <>
        <td>{title}</td>
        <td>{date}</td>
        <td>{ticket}</td>
        <td>
            <i className='text-green material-icons green-item'>check</i>
        </td>
        <td>
            <div className='btn-toolbar'>
                <a href='#'>
                    <button className='btn green' type='submit'>
                        <a href='eventdetails.html'>
                            <i className='material-icons'>done</i>
                        </a>
                    </button>
                </a>
                <a href='#'>
                    <button className='btn red' type='submit'>
                        <i className='material-icons'>remove</i>
                    </button>
                </a>
            </div>
        </td>

        </>)
        }
        {
         status === 'close'
         && (
        <>
        <td>{title}</td>
        <td>{date}</td>
        <td>{ticket}</td>
        <td><i className='text-red material-icons pink-item'>close</i></td>
        <td>
            <div className='btn-toolbar'>
                <a href='#'>
                    <button className='btn green' type='submit'>
                        <a href='eventdetails.html'>
                            <i className='material-icons'>done</i>
                        </a>
                    </button>
                </a>
                <a href='#'>
                    <button className='btn red' type='submit'>
                        <i className='material-icons'>remove</i>
                    </button>
                </a>
            </div>
        </td>

        </>)
        }
        {
         status === 'planned'
         && (
        <>
        <td>{title}</td>
        <td>{date}</td>
        <td>{ticket}</td>
        <td><i className='fas fa-hourglass-half green-item'></i></td>
        <td>
            <div className='btn-toolbar'>
                <a href='#'>
                    <button className='btn green' type='submit'>
                        <a href='eventdetails.html'>
                            <i className='material-icons'>done</i>
                        </a>
                    </button>
                </a>
                <a href='#'>
                    <button className='btn red' type='submit'>
                        <i className='material-icons'>remove</i>
                    </button>
                </a>
            </div>
        </td>

        </>)
        }
    </tr>

  );
};
