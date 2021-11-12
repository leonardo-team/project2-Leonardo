import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Admin } from '../pages/Admin';
import { ShowBill } from '../pages/ShowBill';
import { Tickets } from '../pages/Tickets';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions';
import { selectStatistic, selectEventList } from '../../store/selectors/selectors';
import { useQuery } from '@apollo/client';
import { STATISTIC_QUERY } from '../../queries/statisticQuery';

export default function Routing() {
  const dispatch = useDispatch();

  const { loading, data = {} } = useQuery(STATISTIC_QUERY);
  const { statistics = [] } = data;
  if (statistics.length > 0) {
    dispatch(actions.getStatistic(statistics[0]));
  }

  const routes = [
    {
      path: '/',
      exact: true,
      sidebar: () => (
        <Admin
          path={'/'}
          statistic={useSelector(selectStatistic)}
          eventData={useSelector(selectEventList)}
        />
      ),
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
