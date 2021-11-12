import '../../../src/css/custom.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Statistic } from '../components/AdminComponents/Statistic';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { SideMenu } from '../components/SideMenu/SideMenu';
import { IAdminState } from '../../types';

import { TableEvents } from '../components/AdminComponents/TableEvent';
import { FC } from 'react';

export const Admin: FC<IAdminState> = ({ path, statistic, eventData }) => {
  return (
    <div className="admin">
      <SideMenu path={path} />
      <main>
        <Header path={path} />
        <Statistic
          planned={statistic.planned}
          completed={statistic.completed}
          canceled={statistic.canceled}
        />
        <TableEvents eventData={eventData} />
      </main>
      <Footer />
    </div>
  );
};
