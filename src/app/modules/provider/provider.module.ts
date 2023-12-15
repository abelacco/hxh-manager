import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './pages/provider-list/provider.component';
import { ProviderRoutingModule } from './provider-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MultiSelectModule } from 'primeng/multiselect';
import { ImageModule } from 'primeng/image';
import { ModulesModule } from '../modules.module';
import { PaginatorModule } from 'primeng/paginator';
import { ProviderFormComponent } from './components/provider-form/provider-form.component';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [
        ProviderComponent,
        ProviderFormComponent,
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FileUploadModule,
        DropdownModule,
        DynamicDialogModule,
        ProviderRoutingModule,
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
        ModulesModule,
        PaginatorModule,

      ],
      providers: [
        DialogService,
        MessageService
      ]
})
export class ProviderModule { }
