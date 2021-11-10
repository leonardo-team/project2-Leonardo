import { FC } from 'react';
import { useEffect, useState } from 'react';
import '../../../css/custom.css';
import 'materialize-css/dist/css/materialize.min.css';

export type TicketProps = {
  number?: string,
  encash?: boolean,
};

export const Ticket: FC<TicketProps> = ({ number, encash }) => {
  const [isEncash, setEncash] = useState(encash);
  const [bgStyle, setBgStyle] = useState('small-box bg-green');
  const [buttonStyle, setButtonStyle] = useState('btn red');
  const [buttonDisable, setButtonDisable] = useState(false);

  useEffect(() => {
    if (isEncash) {
      setBgStyle('small-box bg-red');
      setButtonStyle('btn red opacity-null');
      setButtonDisable(true);
    }
  }, [isEncash]);

  const handleClick = () => {
    if (!isEncash) setEncash(true);
  };

  return (
    <div className="col l2 s6 ">
      <div className={bgStyle}>
        <div className="inner">
          <h3>{number}</h3>
          <button disabled={buttonDisable} className={buttonStyle} onClick={handleClick}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};
