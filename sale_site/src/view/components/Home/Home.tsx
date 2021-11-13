import {FC, useEffect, useState} from 'react';
import { EventCard } from '../event_card/event_card';
import '../css/site.css'
import { events } from '../event_object';

export function Home(){
  return (
    <div className="Home">
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="mdl-grid">
            {
              events.map(event=>
                <EventCard eventName={event.eventName} eventDate={event.eventDate} eventSummary={event.eventSummary} />
                )
            }
          </div>
        </div>
      </main>
    </div>
  )
}