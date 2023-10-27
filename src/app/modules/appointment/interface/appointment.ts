export interface Doctor {
    _id: string;
    name: string;
    phone: string;
    speciality: string;
    fee: number;
    __v: number;
}

export interface Patient {
    _id: string;
    name: string;
    phone: string;
    dni: string;
    __v: number;
}

export interface Appointment {
    _id: string;
    doctorId: Doctor;
    patientId: Patient;
    date: Date;
    fee: number;
    status: number;
    code: string;
    voucher: string;
    __v: number;
}
