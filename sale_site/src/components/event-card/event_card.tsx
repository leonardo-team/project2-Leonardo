import {FC} from 'react';
import '../site.css'


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
    <div className="EventCard">
        <div className="mdl-cell mdl-cell--4-col">
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand">
                    <h2 className="mdl-card__title-text">
                        {eventName}
                        <p>
                            {eventDate}  
                        </p>
                    </h2>
                </div>
                <div className="mdl-card__supporting-text">
                    {eventSummary}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Подробнее о событии
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}