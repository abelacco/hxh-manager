import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalDateTimePipe } from './pipes/local-date-time.pipe';
import { LocalDateTimeHourPipe } from './pipes/local-date-time-hour.pipe';


@NgModule({
  declarations: [LocalDateTimePipe, LocalDateTimeHourPipe],
  imports: [
    CommonModule
  ],
  exports: [LocalDateTimePipe , LocalDateTimeHourPipe]
})
export class ModulesModule { }
