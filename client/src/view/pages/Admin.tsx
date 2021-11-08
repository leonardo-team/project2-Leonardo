import '/Frontend/education/HomeWork/FinalProject/project2-Leonardo/client/src/css/custom.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Statistic } from '../components/AdminComponents/Statistic';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu';

import { TableEvents } from '../components/AdminComponents/TableEvent';
import { FC } from 'react';

export type AdminProps = {
  path?:string
}

export const Admin:FC <AdminProps> = ({ path }) =>{
  return <div className="admin">
    <body>
      <SideMenu />
      <main>
        <section className='content'>
          <Header path={path}/>
          <Statistic />
          <TableEvents />
          <Footer />
        </section>
      </main>
    </body>


export function Admin() {
  return <div className="admin">

    <Header />
    <SideMenu />
    <Content statistic={{
      planned: 42,
      completed: 12,
      canceled: 13
    }}/>
    <Footer />

  </div>;
};
