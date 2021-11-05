import { Ticket } from './Ticket';
const tickets = [
  {
    id: '1',
    number: '001',
    encash: true
  },
  {
    id: '2',
    number: '002',
    encash: true
  },
  {
    id: '3',
    number: '003',
    encash: true
  },
  {
    id: '4',
    number: '004',
    encash: true
  },
  {
    id: '5',
    number: '005',
    encash: true
  },
  {
    id: '6',
    number: '006',
    encash: true
  },
  {
    id: '7',
    number: '007',
    encash: true
  },
  {
    id: '8',
    number: '008',
    encash: true
  }
];

export const TicketsQuantityContain = () => {
  const ticketsArr = tickets.map(ticket => {
    return <Ticket key={ticket.id} number={ticket.number} />;
  });
  return (
    <div>
      <h3 className="center-align">Что-то</h3>
      <div className="row">{ticketsArr}</div>
    </div>
  );
};
