import {FC} from 'react';
import { EventCard } from './event-card/event_card';
import './site.css'


export function Home(){
  return (
    <div className="Home">
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="mdl-grid">
              <EventCard eventName="Концерт группы Золотое кольцо" eventDate="21.02.2022" eventSummary="Тут описание события"/>
              <EventCard eventName="Встреча выпускников" eventDate="20.11.2021" eventSummary="Тут описание события"/>
              <EventCard eventName="Выставка художников" eventDate="31.11.2021" eventSummary="Тут описание события"/>
              <EventCard eventName="Марафон РФ 2021" eventSummary="Тут описание события"/>
              <EventCard eventName="" eventSummary="Тут описание события"/>
              <EventCard eventName="" eventSummary="Тут описание события"/>
          </div>
        </div>
      </main>
    </div>
  )
}