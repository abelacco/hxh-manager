import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ProviderFormComponent } from '../../components/provider-form/provider-form.component';
import { Subject, first, takeUntil } from 'rxjs';

@Component({
  selector: 'app-providers',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
  providers: [DialogService]
})
export class ProviderComponent implements OnInit {
  doctors: [] = [];
  totalRecords: number;
  currentPage: number = 1;
  limit: number = 10; // Tamaño de página
  loading: boolean = false;
  searchName: string = ''; // Filtro de búsqueda por nombre
  searchPhone: string = ''; // Filtro de búsqueda por teléfono
  params = {
    offset: (this.currentPage - 1) * this.limit,
    limit: this.limit,
    name: this.searchName,
    phone: this.searchPhone
  };
  private unsubscribe$ = new Subject<void>();

  constructor(private providerService: ProviderService,
    private dialogService: DialogService,
    ) {}

  ngOnInit(): void {
    console.log('Inicializando componente');
    this.loadProviders();
  }

  loadProviders(): void {
    console.log('Cargando proveedores:', 'currentPage:', this.currentPage, 'limit:', this.limit);
    this.loading = true;
    console.log('Parámetros de búsqueda:', this.params);
    this.getDoctors(this.params);
    // Parámetros para paginación y filtros
    // const params = {
    //   offset: (this.currentPage - 1) * this.limit,
    //   limit: this.limit,
    //   name: this.searchName,
    //   phone: this.searchPhone
    // };


  }


  getDoctors(params: any) {

    this.providerService.getProviders(params)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
        next: (response) => {
            console.log('Respuesta de la API:', response);
            this.doctors = response.data.data;
            this.totalRecords = response.data.total;
            console.log('proveedores:', this.doctors);
            this.loading = false;
        },
        error: (error) => {
            console.error('Error al cargar los proveedores:', error);
            this.loading = false;
        }
    });
  }

  onPageChange(event: any): void {
    console.log('Evento de cambio de página:', event);
    this.currentPage = event.first / event.rows + 1;
    this.limit = event.rows;
    this.params = {
        ...this.params, // Mantener los filtros existentes
        offset: (this.currentPage - 1) * this.limit,
        limit: this.limit
      };

    console.log('Nueva página:', this.params , this.currentPage, 'Nuevo límite:', this.limit);
    this.loadProviders();
  }

  showDoctorForm() {
    const ref = this.dialogService.open(ProviderFormComponent, {
        header: 'Crear Nuevo Proveedor',
        width: '30%',
        // ...otros parámetros...
    });

    ref.onClose.subscribe((result) => {
        if (result === 'providerCreated') {
            this.loadProviders(); // Actualiza la lista de proveedores
        }
    });
}
}
