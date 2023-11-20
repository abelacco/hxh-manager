export interface IPaymentDoctor {
    _id: string;
    startDate: string;
    endDate: string;
    doctorId: {
        _id: string;
        name: string;
        phone: string;
        speciality: string;
        fee: number;
        imageUrl: string;
        __v: number;
    };
    appointmentQ: number;
    transactionBeforeFee: number;
    doctorEarnings: number;
    qaliFee: number;
    status: number;
    paymentDate: string;
    __v: number;
}

