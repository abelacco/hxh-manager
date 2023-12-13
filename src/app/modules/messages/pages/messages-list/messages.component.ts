import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject,takeUntil } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  providers: [DialogService]
})
export class MessagesComponent implements OnInit {
  messages: [] = [];
  totalRecords: number;
  currentPage: number = 1;
  limit: number = 10; // Tamaño de página
  loading: boolean = false;
  searchName: string = ''; // Filtro de búsqueda por nombre
  searchPhone: string = ''; // Filtro de búsqueda por teléfono
  params = {
    offset: (this.currentPage - 1) * this.limit,
    limit: this.limit,
    // name: this.searchName,
    // phone: this.searchPhone
  };
  private unsubscribe$ = new Subject<void>();

  constructor(private messagesService: MessagesService,
    ) {}

  ngOnInit(): void {
    console.log('Inicializando componente');
    this.loadMessages();
  }

  loadMessages(): void {
    console.log('Cargando doctores:', 'currentPage:', this.currentPage, 'limit:', this.limit);
    this.loading = true;
    console.log('Parámetros de búsqueda:', this.params);
    this.getMessages(this.params);

  }


  getMessages(params: any) {

    this.messagesService.getMessagesByPagination(params)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
        next: (response) => {
            console.log('Respuesta de la API:', response);
            this.messages = response.data.data;
            this.totalRecords = response.data.total;
            console.log('Doctores:', this.messages);
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
    this.params = {
        ...this.params, // Mantener los filtros existentes
        offset: (this.currentPage - 1) * this.limit,
        limit: this.limit
      };

    console.log('Nueva página:', this.params , this.currentPage, 'Nuevo límite:', this.limit);
    this.loadMessages();
  }

}
