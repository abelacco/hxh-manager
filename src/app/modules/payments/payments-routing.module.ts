import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaymentDoctorComponent } from './pages/payment-doctor/payment-doctor.component';

const routes: Routes = [
    { path: 'doctores', component: PaymentDoctorComponent }, // Ruta principal del módulo
    // ... otras rutas específicas para el módulo Appointment ...
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PaymentsRoutingModule { }
