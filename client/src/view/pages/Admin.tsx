import '../../css/custom.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Statistic } from '../components/AdminComponents/Statistic';
import { IAdminState } from '../../types';
import { TableEvents } from '../components/AdminComponents/TableEvent';
import { FC } from 'react';
import SideMenu from '../components/SideMenu';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Admin: FC<IAdminState> = ({ path }) => {
  return (
    <div className="admin">
      <SideMenu path={path} />
      <main>
        <Header path={path} />
        <Statistic />
        <TableEvents />
      </main>
      <Footer />
    </div>
  );
};
