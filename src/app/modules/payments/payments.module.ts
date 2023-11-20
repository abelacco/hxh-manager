import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDoctorComponent } from './pages/payment-doctor/payment-doctor.component';
import { PaymentStoreComponent } from './pages/payment-store/payment-store.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MultiSelectModule } from 'primeng/multiselect';
import { ImageModule } from 'primeng/image';
import { PaymentsRoutingModule } from './payments-routing.module';
import { ModulesModule } from '../modules.module';


@NgModule({
  declarations: [
    PaymentDoctorComponent,
    PaymentStoreComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    TagModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    ToastModule,
    ProgressSpinnerModule,
    MultiSelectModule,
    ImageModule,
    ModulesModule
  ]
})
export class PaymentsModule { }
