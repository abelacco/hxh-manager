export interface IPaymentProvider {
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
    providerFee: number;
    status: number;
    paymentDate: string;
    __v: number;
}

