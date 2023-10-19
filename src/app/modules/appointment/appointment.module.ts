import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentPageComponent } from './page/appointment-page.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppointmentPageComponent,
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule
  ]
})
export class AppointmentModule { }
