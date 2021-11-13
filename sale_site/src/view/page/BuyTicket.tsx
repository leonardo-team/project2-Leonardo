import '../components/css/site.css';
import { FC } from 'react';



export type BuyTicketProps = {
    path:string
}

export const BuyTicket: FC<BuyTicketProps> = ({path})=>{
    return(
        <div className="buy_ticket_page">
            Тут происходит покупка билетов
        </div>
    )
}