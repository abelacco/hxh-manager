import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Appointment } from '../interface/appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

    private readonly endpoint = `${environment.apiEndpoint}appointment`;


    constructor(private http: HttpClient) { }

    getAppointments(): Observable<Appointment[]> {
      return this.http.get<Appointment[]>(this.endpoint);
    }

    updateAppointment(appointmentUpdate: any): Observable<Appointment[]> {
        console.log('Cita a actualizar:', appointmentUpdate);
        return this.http.patch<any>(`${this.endpoint}/update/status/${appointmentUpdate._id}`, {status: appointmentUpdate.status})
            .pipe(
                catchError((error: any) => {
                    console.error('Ocurrió un error:', error);  // Esto mostrará el error completo en la consola.
                    return throwError(error);  // Esto devolverá el error completo a cualquier suscriptor.
                })
            );
    }

}
