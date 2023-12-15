import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProviderComponent} from './pages/provider-list/provider.component';

const routes: Routes = [
    { path: '', component: ProviderComponent }, // Ruta principal del módulo
    // ... otras rutas específicas para el módulo Appointment ...
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProviderRoutingModule { }
