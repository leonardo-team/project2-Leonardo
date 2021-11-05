import { FC } from 'react';

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
