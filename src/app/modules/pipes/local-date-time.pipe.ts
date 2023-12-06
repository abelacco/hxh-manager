import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {


transform(value: string): string {
    if (!value) return '';

    // Asegúrate de que moment interpreta la fecha como UTC
    const date = moment.utc(value);

    // Formatea la fecha sin convertirla a otra zona horaria
    return date.format('DD-MM-YYYY');
  }

}
