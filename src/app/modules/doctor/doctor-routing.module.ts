import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DoctorComponent } from './pages/doctor-list/doctor.component';

const routes: Routes = [
    { path: '', component: DoctorComponent }, // Ruta principal del módulo
    // ... otras rutas específicas para el módulo Appointment ...
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DoctorRoutingModule { }
