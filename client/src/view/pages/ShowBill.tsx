import { FC } from 'react';
import { CreateForm } from '../components/EventDetailsComponents/EventDetails';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { SideMenu } from '../components/SideMenu/SideMenu';
import '../../../src/css/custom.css';

export type ShowBillProps = {
  path?: string,
};

export const ShowBill: FC<ShowBillProps> = ({ path }) => {
  return (
    <div className="showBill">
      <SideMenu path={path} />
      <main>
        <section className="content">
          <Header path={path} />
          <CreateForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};
