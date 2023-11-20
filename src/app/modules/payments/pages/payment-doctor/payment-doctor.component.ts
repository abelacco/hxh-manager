import { Component, OnInit } from '@angular/core';
import { IPaymentDoctor } from '../../interface/paymentDoctor';
import { PaymentDoctorService } from '../services/payment-doctor.service';

import {
    ConfirmationService,
    MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-payment-doctor',
  templateUrl: './payment-doctor.component.html',
  styleUrls: ['./payment-doctor.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class PaymentDoctorComponent implements OnInit {

    loading: boolean = false;
    payments: IPaymentDoctor[] = []; // Un array para guardar los pagos.

    constructor(
        private paymentDoctorService: PaymentDoctorService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.fetchPayments();
    }

    fetchPayments(): void {
        this.loading = true;
        this.paymentDoctorService.getPaymentsDoctors().subscribe({
            next: (data: IPaymentDoctor[]) => {
                this.payments = data;
                this.loading = false;
                console.log('Pagos cargados:', this.payments);
            },
            error: (error) => {
                console.error('Error al obtener los pagos:', error);
                this.loading = false;
            },
        });
    }

    // Aquí añade los métodos para manejar la confirmación/rechazo de pagos

}
