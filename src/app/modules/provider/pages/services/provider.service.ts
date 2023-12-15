import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
private readonly endpoint = `${environment.apiEndpoint}provider`;

  constructor(private http: HttpClient) {}

  // Obtener providers
  getProviders(params: any): Observable<any> {
    return this.http.get(`${this.endpoint}/paginate`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo provider
  createProvider(providerData: any): Observable<any> {
    return this.http.post(`${this.endpoint}`, providerData).pipe(
      tap(response => console.log('Respuesta completa:', response)),
      catchError(this.handleError)
    );
  }

// Manejador de errores
private handleError(error: any) {
    let errorMessage = 'Ocurrió un error desconocido';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else if (error && error.error && error.error.message) {
      // Error del lado del servidor con mensaje personalizado
      errorMessage = error.error.message; // Si es un array de mensajes, los une
    } else {
      // Error del lado del servidor
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

}
