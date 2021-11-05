import {FC, useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/site.css'


export type CardProps = {
    eventName?:string;
    eventDate?:string;
    eventSummary?:string;
    eventViews?:string;
}

export const EventCard:FC<CardProps> = ({
    eventName,
    eventDate,
    eventSummary,
    eventViews,
})=>{

  return (
    <div className="EventCard my_card">
        <div className="mdl-cell mdl-cell--4-col">
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand">
                    <h2 className="mdl-card__title-text">
                        {eventName}
                        
                    </h2>
                    <p>
                        {eventDate}  
                    </p>
                </div>
                <div className="mdl-card__supporting-text">
                    {eventSummary}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Подробнее о событии
                    </a>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent my_button">
                        КУПИТЬ
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}