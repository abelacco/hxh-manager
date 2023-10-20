import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Appointment } from '../interface/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

    // private readonly endpoint = 'https://qali-services-production.up.railway.app/api/v1/appointment';
    private readonly endpoint = 'http://localhost:3001/api/v1/appointment';


    constructor(private http: HttpClient) { }

    getAppointments(): Observable<Appointment[]> {
      return this.http.get<Appointment[]>(this.endpoint);
    }

    updateAppointment(appointmentUpdate: any): Observable<Appointment[]> {
        console.log('Cita a actualizar:', appointmentUpdate);
        return this.http.patch<any>(`${this.endpoint}/${appointmentUpdate._id}`, {status: appointmentUpdate.status})
            .pipe(
                catchError((error: any) => {
                    console.error('Ocurrió un error:', error);  // Esto mostrará el error completo en la consola.
                    return throwError(error);  // Esto devolverá el error completo a cualquier suscriptor.
                })
            );
    }

}
