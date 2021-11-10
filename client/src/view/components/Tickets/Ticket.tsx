import { FC } from 'react';
import '../../../css/custom.css';
import 'materialize-css/dist/css/materialize.min.css';

export type TicketProps = {
  number?: string,
  encash?: boolean,
};

export const Ticket: FC<TicketProps> = ({ number, encash }) => {
  let buttonStyle;
  let bgStyle;
  let buttonDisable;
  if (encash === true) {
    buttonStyle = 'btn red';
    bgStyle = 'small-box bg-green';
    buttonDisable = false;
  } else {
    buttonStyle = 'btn red opacity-null';
    bgStyle = 'small-box bg-red';
    buttonDisable = true;
  }

  return (
    <div className="col l2 s6 ">
      <div className={bgStyle}>
        <div className="inner">
          <h3>{number}</h3>
          <button
            disabled={buttonDisable}
            type="submit"
            className={buttonStyle}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
