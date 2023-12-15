export interface Provider {
    _id: string;
    name: string;
    phone: string;
    // speciality: string;
    fee: number;
    __v: number;
}

export interface Client {
    _id: string;
    name: string;
    phone: string;
    dni: string;
    __v: number;
}

export interface Appointment {
    _id: string;
    providerId: Provider;
    clientId: Client;
    date: Date;
    fee: number;
    status: string;
    code: string;
    voucher: string;
    __v: number;
}
