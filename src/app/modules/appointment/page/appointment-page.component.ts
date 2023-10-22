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
    customers1 = [];
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

    updateAppoinment(appointment: Appointment): void {
        this.appointmentService.updateAppointment(appointment).subscribe({
            next: (data: Appointment[]) => {
                // this.appointments = data;
                console.log('Cita actualizada');
                this.fetchAppointments();
            },
            error: (error) => {
                console.error('Error al actualizar cita:', error);
            },
        });
    }

    confirm1(appointment: Appointment) {
        console.log('Cita a confirmar:', appointment);
        if (appointment.status === 1) {
            this.confirmationService.confirm({
                key: 'cd' + appointment._id,
                message: '¿Deseas aceptar o rechazar el pago?',
                header: 'Confirmación',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    // Aquí es donde actualizamos el estado de la cita y luego llamamos al servicio para guardar el cambio
                    // Puedes modificar el estado según tu lógica. Aquí estoy asumiendo que el estado se cambia a "accepted"
                    appointment.status = 2;
                    this.updateAppoinment(appointment);
                    this.messageService.add({
                        severity: 'info',
                        summary: 'Confirmed',
                        detail: 'Cita Aceptada',
                    });
                },
                reject: (type: ConfirmEventType) => {
                    switch (type) {
                        case ConfirmEventType.REJECT:
                            // Aquí puedes manejar el rechazo. Si es necesario, también puedes actualizar la cita según tu lógica.
                            appointment.status = 2;
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Rejected',
                                detail: 'Cita Rechazada',
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
        console.log('Cita a confirmar:1');
    }

    acceptAppointment(appointment: Appointment) {
        // Aquí es donde actualizas el estado de la cita y luego llamas al servicio para guardar el cambio
        appointment.status = 2;
        this.updateAppoinment(appointment);
        this.messageService.add({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'Cita Aceptada',
        });
        // Cerrar el diálogo manualmente (si es necesario)
    }

    rejectAppointment(appointment: Appointment) {
        appointment.status = 3; // Puedes cambiar esto según tu lógica
        this.updateAppoinment(appointment);
        this.messageService.add({
            severity: 'error',
            summary: 'Rejected',
            detail: 'Cita Rechazada',
        });
        // Cerrar el diálogo manualmente (si es necesario)
    }

    cursorAppointment(appointment: Appointment) {
        if (appointment.status === 1) {
            return { cursor: 'pointer' };
        } else {
            return { cursor: 'auto' };
        }
    }
}
