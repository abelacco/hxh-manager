import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  doctors: [] = [];
  totalRecords: number;
  currentPage: number = 1;
  limit: number =10; // Tamaño de página
  loading: boolean = false;
  searchName: string = ''; // Filtro de búsqueda por nombre
  searchPhone: string = ''; // Filtro de búsqueda por teléfono

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    console.log('Inicializando componente');
    this.loadDoctors();
  }

  loadDoctors(): void {
    console.log('Cargando doctores:', 'currentPage:', this.currentPage, 'limit:', this.limit);
    this.loading = true;
    // Parámetros para paginación y filtros
    const params = {
      offset: (this.currentPage - 1) * this.limit,
      limit: this.limit,
      name: this.searchName,
      phone: this.searchPhone
    };

    this.doctorService.getDoctors(params).subscribe(
      response => {
        console.log('Respuesta de la API:', response);
        this.doctors = response.data.data;
        this.totalRecords = response.data.total;
        this.loading = false;
      },
      error => {
        console.error('Error al cargar los doctores:', error);
        this.loading = false;
      }
    );
  }

  onPageChange(event: any): void {
    console.log('Evento de cambio de página:', event);
    this.currentPage = event.first / event.rows + 1;
    this.limit = event.rows;
    console.log('Nueva página:', this.currentPage, 'Nuevo límite:', this.limit);
    this.loadDoctors();
  }


  // Métodos para manejar eventos de búsqueda, paginación, etc...

}
