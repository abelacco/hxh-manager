import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentPageComponent } from './page/appointment-page.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { StatusPipe } from './pipes/status.pipe';
import { SeverityPipe } from './pipes/severity.pipe';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MultiSelectModule } from 'primeng/multiselect';
import { ImageModule } from 'primeng/image';
import { ModulesModule } from '../modules.module'
@NgModule({
    declarations: [AppointmentPageComponent, StatusPipe, SeverityPipe],
    imports: [
        CommonModule,
        AppointmentRoutingModule,
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
    ],
    providers: [ConfirmationService],
})
export class AppointmentModule {}
