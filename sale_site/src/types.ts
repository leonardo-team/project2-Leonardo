export type EventCardType = {
<<<<<<< HEAD
    eventName?:string;
    eventDate?:string;
    eventSummary?:string;
    eventViews?:string;
=======
    id?:string;
    title?:string;
    description?:string;
    date?:string;
    image?: string;
    status?: string;
    rate: number,
    encashTickets: number;
    visited: number;
>>>>>>> petrov
}

export type HeaderType = {
    login?: string,
    path?:string
}

export type LoginFormType= {
    path?: string;
}

<<<<<<< HEAD
export type PagePathType= {
    path:string
=======
export type SiteAppState= {
    eventData: Array<EventCardType>,
    path: string
>>>>>>> petrov
}