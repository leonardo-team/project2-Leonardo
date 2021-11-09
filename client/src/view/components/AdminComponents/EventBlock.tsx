import { FC } from 'react';

import '../../../css/custom.css';

export type EventBlockProps = {
  title?:string
  stat?:number
}

export const EventBlock:FC<EventBlockProps> = ({ title, stat })=>{
  return (
  <div className="EventBlock">
  {
    title === 'planned'
    && (
    <div className='col l3 s6'>
      <div className='small-box bg-yellow'>
          <div className='inner'>
              <h3>{stat}</h3>
              <p>Предстоящих мероприятий</p>
          </div>
          <div className='icon'>
              <i className='far fa-calendar-check'></i>
          </div>
          <a href='#' className='small-box-footer animsition-link'>More info
              <i className='fa fa-arrow-circle-down'></i>
          </a>
      </div>
    </div>

    )
}
{
    title === 'completed'
    && (
    <div className='col l3 s6'>
      <div className='small-box bg-green'>
        <div className='inner'>
            <h3>{stat}</h3>
            <p>Проведенных мероприятий</p>
        </div>
        <div className='icon'>
            <i className='fas fa-sign-language'></i>
        </div>
        <a href='#' className='small-box-footer animsition-link'>More info
            <i className='fa fa-arrow-circle-down'></i>
        </a>
      </div>
    </div>
    )
}
{
    title === 'canceled'
    && (
    <div className='col l3 s6'>
      <div className='small-box bg-red'>
          <div className='inner'>
              <h3>{stat}</h3>
              <p>Отмененных мероприятий</p>
          </div>
          <div className='icon'>
              <i className='fas fa-microphone-alt-slash'></i>
          </div>
          <a href='#' className='small-box-footer animsition-link'>More info
              <i className='fa fa-arrow-circle-down'></i>
          </a>
      </div>
    </div>
    )
}
{
    title === 'allEvents'
    && (
    <div className='col l3 s6'>
      <div className='small-box bg-aqua'>
          <div className='inner'>
              <h3>{stat}</h3>
              <p>Всего мероприятий</p>
          </div>
          <div className='icon'>
              <i className="fas fa-chart-pie"></i>
          </div>
          <a href='#' className='small-box-footer animsition-link'>
              More info
              <i className='fa fa-arrow-circle-down'></i>
          </a>
      </div>
    </div>
    )
}
  </div>

  );
};
