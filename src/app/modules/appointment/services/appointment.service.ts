import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../interface/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

    private readonly endpoint = 'https://qali-services-production.up.railway.app/api/v1/appointment';

    constructor(private http: HttpClient) { }

    getAppointments(): Observable<Appointment[]> {
      return this.http.get<Appointment[]>(this.endpoint);
    }
}
