import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'severity',
})
export class SeverityPipe implements PipeTransform {
    transform(status: number): string {
        switch (status) {
            case 0:
                return 'info';
            case 1:
                return 'warning';
            case 2:
                return 'success';
            case 3:
                return 'danger';
            default:
                return 'Desconocido'; // Valor por defecto en caso de que no coincida con los estados previstos
        }
    }
}
