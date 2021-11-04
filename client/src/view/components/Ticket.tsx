export const Ticket = ({number, encash}) => {
    return (
    <div>
      <div>{number}</div>
      <button className={encash}>-</button>
    </div>
  );
};
