import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDateTimeHour'
})
export class LocalDateTimeHourPipe implements PipeTransform {

    transform(value: string): string {
        if (!value) return '';

        // Try parsing the date as local time instead of UTC
        const date = moment(value);

        // Format the date in local time
        return date.isValid() ? date.format('DD-MM-YYYY hh:mm a') : '';
      }


}
