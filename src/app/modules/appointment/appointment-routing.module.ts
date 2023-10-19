import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppointmentPageComponent } from './page/appointment-page.component';

const routes: Routes = [
    { path: '', component: AppointmentPageComponent }, // Ruta principal del módulo
    // ... otras rutas específicas para el módulo Appointment ...
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppointmentRoutingModule { }
