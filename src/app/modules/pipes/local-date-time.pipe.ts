import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const date = new Date(value);
    const timeZone = 'America/Lima'; // Zona horaria de Perú
    return new Intl.DateTimeFormat('es-PE', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: timeZone
    }).format(date);
  }

}
