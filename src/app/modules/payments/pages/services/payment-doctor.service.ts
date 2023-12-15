import { HttpClient , HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IPaymentProvider } from '../../interface/paymentProvider';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDoctorService {

    private readonly endpoint = `${environment.apiEndpoint}payment`;


    constructor(private http: HttpClient) { }

    getPaymentsDoctors(): Observable<IPaymentProvider[]> {

        return this.http.get<IPaymentProvider[]>(this.endpoint);
      }

    updateStatusPaymentsDoctors(appointmentUpdate: any): Observable<IPaymentProvider[]> {
        console.log('Pago a actualizar:', appointmentUpdate);
        return this.http.patch<any>(`${this.endpoint}/update/status/${appointmentUpdate._id}`, {status: appointmentUpdate.status})
            .pipe(
                catchError((error: any) => {
                    console.error('Ocurrió un error:', error);  // Esto mostrará el error completo en la consola.
                    return throwError(error);  // Esto devolverá el error completo a cualquier suscriptor.
                })
            );
    }}
