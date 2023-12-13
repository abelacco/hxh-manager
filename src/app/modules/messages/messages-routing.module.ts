import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MessagesComponent } from './pages/messages-list/messages.component';

const routes: Routes = [
    { path: '', component: MessagesComponent }, // Ruta principal del módulo
    // ... otras rutas específicas para el módulo Appointment ...
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MessagesRoutingModule { }
