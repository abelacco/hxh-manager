import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'status',
})
export class StatusPipe implements PipeTransform {
    transform(status: number): string {
        switch (status) {
            case 0:
                return 'En proceso';
            case 1:
                return 'Pendiente de pago';
            case 2:
                return 'Pagada';
            case 3:
                return 'Cancelada';
            default:
                return 'Desconocido'; // Valor por defecto en caso de que no coincida con los estados previstos
        }
    }
}
