export type EventCardType = {
    id?:string;
    title?:string;
    description?:string;
    date?:string;
    image?: string;
    status?: string;
    rate: number,
    encashTickets: number;
    visited: number;
}

export type HeaderType = {
    login?: string,
    path?:string
}

export type LoginFormType= {
    path?: string;
}

export type SiteAppState= {
    eventData: Array<EventCardType>,
    path: string
}