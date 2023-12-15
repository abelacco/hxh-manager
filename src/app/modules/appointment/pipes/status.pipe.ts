import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'status',
})
export class StatusPipe implements PipeTransform {
    transform(status: string): string {
        switch (status) {
            case '0':
                return 'En proceso';
            case '1':
                return 'Por aprobar';
            case '2':
                return 'Pagada';
            case '3':
                return 'Cancelada';
            default:
                return 'Desconocido'; // Valor por defecto en caso de que no coincida con los estados previstos
        }
    }
}
