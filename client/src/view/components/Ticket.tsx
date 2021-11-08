import { FC } from 'react';
import '../../../src/css/custom.css';
import 'materialize-css/dist/css/materialize.min.css';

export type TicketProps = {
    number?: string,
    encash?: string,
};

export const Ticket: FC <TicketProps> = ({ number, encash }) => {
  return (
    <div>
      <div>{number}</div>
      <button className={encash}>-</button>
    </div>
  );
};
