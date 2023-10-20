import { Component } from '@angular/core';
import { Appointment } from '../interface/appointment';
import { AppointmentService } from '../services/appointment.service';
import {
    ConfirmationService,
    MessageService,
    ConfirmEventType,
} from 'primeng/api';

@Component({
    selector: 'app-appointment-page',
    templateUrl: './appointment-page.component.html',
    styleUrls: ['./appointment-page.component.scss'],
    providers: [ConfirmationService, MessageService],
})
export class AppointmentPageComponent {
    customers1: [] = [];
    loading: boolean = true;
    appointments: Appointment[] = []; // Un array para guardar las citas.

    constructor(
        private appointmentService: AppointmentService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.fetchAppointments();
    }

    fetchAppointments(): void {
        this.appointmentService.getAppointments().subscribe({
            next: (data: Appointment[]) => {
                this.appointments = data;
                console.log('Citas cargadas:', this.appointments);
            },
            error: (error) => {
                console.error('Error al obtener las citas:', error);
            },
        });
    }

    confirm1() {
        this.confirmationService.confirm({
            accept: () => {
                this.messageService.add({
                    severity: 'info',
                    summary: 'Confirmed',
                    detail: 'You have accepted',
                });
            },
            reject: (type: ConfirmEventType) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Rejected',
                            detail: 'You have rejected',
                        });
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({
                            severity: 'warn',
                            summary: 'Cancelled',
                            detail: 'You have cancelled',
                        });
                        break;
                }
            },
        });
    }
}
