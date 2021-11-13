import '../../css/custom.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Statistic } from '../components/AdminComponents/Statistic';
import { IAdminState } from '../../types';
import { TableEvents } from '../components/AdminComponents/TableEvent';
import { FC } from 'react';
import SideMenu from '../components/SideMenu/SideMenu';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

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
