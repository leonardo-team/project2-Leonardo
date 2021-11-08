import { FC } from 'react';
import '../../css/custom.css';

export type HeaderProps = {
  path?:string
}

export const Header:FC<HeaderProps> = ({ path })=>{
  return (
    <div className="Header">
      {
      path === '/'
      && (
      <div className='page-announce valign-wrapper'>
        <a href='#' data-activates='slide-out' className='button-collapse valign hide-on-large-only'>
            <i className='material-icons'></i>
        </a>
        <h1 className='page-announce-text valign'>Календарь событий</h1>
      </div>
      )
      }
      {
      path === '/ShowBill.tsx'
      && (
      <div className='page-announce valign-wrapper'>
        <a href='#' data-activates='slide-out' className='button-collapse valign hide-on-large-only'>
            <i className='material-icons'></i>
        </a>
        <h1 className='page-announce-text valign'>Новое событие</h1>
      </div>
      )
      }
      {
      path === '/Tickets.tsx'
      && (
      <div className='page-announce valign-wrapper'>
        <a href='#' data-activates='slide-out' className='button-collapse valign hide-on-large-only'>
            <i className='material-icons'></i>
        </a>
        <h1 className='page-announce-text valign'>Билеты</h1>
      </div>
      )
      }
    </div>
  );
};
