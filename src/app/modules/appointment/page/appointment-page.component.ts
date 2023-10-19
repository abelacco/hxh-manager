import { Component } from '@angular/core';
import { Appointment } from '../interface/appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.scss']
})
export class AppointmentPageComponent {

    customers1: [] = [];
    loading: boolean = true;
    appointments: Appointment[] = [];  // Un array para guardar las citas.

     constructor(private appointmentService: AppointmentService) { }

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
            }
          });

      }
}
