import { FC } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { SideMenu } from '../components/SideMenu/SideMenu';
import { TicketsQuantityContain } from '../components/Tickets/TicketsQuantityContain';
import '../../../src/css/custom.css';
import 'materialize-css/dist/css/materialize.min.css';

export type TicketsProps = {
  path?: string,
};

export const Tickets: FC<TicketsProps> = ({ path }) => {
  return (
    <div className="Tickets">
      <body>
        <SideMenu path={path} />
        <main>
          <section className="content">
            <Header path={path} />
            <TicketsQuantityContain eventName="Название мероприятия" />
            <Footer />
          </section>
        </main>
      </body>
    </div>
  );
};
