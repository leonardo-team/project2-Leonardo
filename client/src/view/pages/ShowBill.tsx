import { FC } from 'react';
import { CreateForm } from '../components/EventDetailsComponents/EventDetails';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import SideMenu from '../components/SideMenu';

export type ShowBillProps = {
  path?:string
}

export const ShowBill:FC<ShowBillProps> = ({ path })=>{
  return (
    <div className="showBill">
      <body>
      <SideMenu />
      <main>
        <section className='content'>
          <Header path={path}/>
          <CreateForm />
          <Footer />
        </section>
      </main>
    </body>
    </div>
  );
};
