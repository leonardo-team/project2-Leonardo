import {FC, useEffect, useState} from 'react';
import { EventCard } from '../EventCard/EventCard';
import '../css/site.css'
import { Events } from '../Events';

export function LoginHome(){
  return (
    <div className="LoginHome">
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="mdl-grid">
            {
              Events.map(event=>
                <EventCard eventName={event.eventName} eventDate={event.eventDate} eventSummary={event.eventSummary} />
                )
            }
          </div>
        </div>
      </main>
    </div>
  )
}