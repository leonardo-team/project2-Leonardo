import { FC } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import SideMenu from '../components/SideMenu';
import { TicketsQuantityContain } from '../components/TicketsQuantityContain';

export type TicketsProps = {
  path?: string,
};

export const Tickets: FC<TicketsProps> = ({ path }) => {
  return (
    <div className="Tickets">
      <body>
        <SideMenu />
        <main>
          <section className='content'>
            <Header path={path} />
            <TicketsQuantityContain />
            <Footer />
          </section>
        </main>
      </body>
    </div>
  );
};
