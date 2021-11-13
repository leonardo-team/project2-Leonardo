import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Admin } from '../../pages/Admin';
import { ShowBill } from '../../pages/ShowBill';
import { Tickets } from '../../pages/Tickets';
import { useSelector } from 'react-redux';
import { selectStatistic, selectEventList } from '../../../store/selectors/selectors';

export default function Routing() {
  const routes = [
    {
      path: '/',
      exact: true,
      sidebar: () => <Admin path={'/'} />,
    },
    {
      path: '/ShowBill.tsx',
      exact: false,
      sidebar: () => <ShowBill path={'/ShowBill.tsx'} />,
    },
    {
      path: '/Tickets.tsx',
      exact: false,
      sidebar: () => <Tickets path={'/Tickets.tsx'} />,
    },
  ];

  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} children={<route.sidebar />} />
        ))}
      </Switch>
    </Router>
  );
}
