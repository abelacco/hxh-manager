import { HttpClient , HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IPaymentDoctor } from '../../interface/paymentDoctor';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDoctorService {

    private readonly endpoint = `${environment.apiEndpoint}payment`;
    // private readonly endpoint = 'http://localhost:3001/api/v1/appointment';


    constructor(private http: HttpClient) { }

    getPaymentsDoctors(): Observable<IPaymentDoctor[]> {

        return this.http.get<IPaymentDoctor[]>(this.endpoint);
      }

    updateStatusPaymentsDoctors(appointmentUpdate: any): Observable<IPaymentDoctor[]> {
        console.log('Pago a actualizar:', appointmentUpdate);
        return this.http.patch<any>(`${this.endpoint}/update/status/${appointmentUpdate._id}`, {status: appointmentUpdate.status})
            .pipe(
                catchError((error: any) => {
                    console.error('Ocurrió un error:', error);  // Esto mostrará el error completo en la consola.
                    return throwError(error);  // Esto devolverá el error completo a cualquier suscriptor.
                })
            );
    }}
