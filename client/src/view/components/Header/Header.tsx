import { FC } from 'react';

import '../../../css/custom.css';

export type HeaderProps = {
  path?:string
}

export const Header:FC<HeaderProps> = ({ path })=>{
  let title;

  switch (path) {
    case '/':
      title = 'Календарь событий';
      break;

    case '/ShowBill.tsx':
      title = 'Новое событие';
      break;

    case '/Tickets.tsx':
      title = 'Билеты';
      break;

    default:
      title = 'Календарь событий';
  }

  return (
    <div className="Header">

      <div className='page-announce valign-wrapper'>
        <a href='#' data-activates='slide-out' className='button-collapse valign hide-on-large-only'>
            <i className='material-icons'></i>
        </a>
        <h1 className='page-announce-text valign'>{title}</h1>
      </div>

    </div>
  );
};
