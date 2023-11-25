import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
private readonly endpoint = `${environment.apiEndpoint}doctor`;

  constructor(private http: HttpClient) {}

  // Obtener doctores
  getDoctors(params: any): Observable<any> {
    return this.http.get(`${this.endpoint}/paginate`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo doctor
  createDoctor(doctorData: any): Observable<any> {
    return this.http.post(`${this.endpoint}`, doctorData).pipe(
      catchError(this.handleError)
    );
  }

  // Manejador de errores
  private handleError(error: any) {
    let errorMessage = 'Ocurrió un error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    // Aquí podrías agregar más lógica de manejo de errores, como enviar a un servicio de logging
    console.error(errorMessage);
    return errorMessage;
  }
}
