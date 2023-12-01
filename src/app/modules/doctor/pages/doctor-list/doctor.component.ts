import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { DialogService } from 'primeng/dynamicdialog';
import { DoctorFormComponent } from '../../components/doctor-form/doctor-form.component';
import { Subject, first, takeUntil } from 'rxjs';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
  providers: [DialogService]
})
export class DoctorComponent implements OnInit {
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

  constructor(private doctorService: DoctorService,
    private dialogService: DialogService,
    ) {}

  ngOnInit(): void {
    console.log('Inicializando componente');
    this.loadDoctors();
  }

  loadDoctors(): void {
    console.log('Cargando doctores:', 'currentPage:', this.currentPage, 'limit:', this.limit);
    this.loading = true;
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

    this.doctorService.getDoctors(params)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
        next: (response) => {
            console.log('Respuesta de la API:', response);
            this.doctors = response.data.data;
            this.totalRecords = response.data.total;
            console.log('Doctores:', this.doctors);
            this.loading = false;
        },
        error: (error) => {
            console.error('Error al cargar los doctores:', error);
            this.loading = false;
        }
    });
  }

  onPageChange(event: any): void {
    console.log('Evento de cambio de página:', event);
    this.currentPage = event.first / event.rows + 1;
    this.limit = event.rows;
    console.log('Nueva página:', this.currentPage, 'Nuevo límite:', this.limit);
    // this.loadDoctors();
  }

  showDoctorForm() {
    const ref = this.dialogService.open(DoctorFormComponent, {
        header: 'Crear Nuevo Doctor',
        width: '30%',
        // ...otros parámetros...
    });

    ref.onClose.subscribe((result) => {
        if (result === 'doctorCreated') {
            this.loadDoctors(); // Actualiza la lista de doctores
        }
    });
}
}
