import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { ProviderService } from '../../pages/services/provider.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, first, takeUntil } from 'rxjs';

@Component({
    selector: 'app-provider-form',
    templateUrl: './provider-form.component.html',
    styleUrls: ['./provider-form.component.scss']
})
export class ProviderFormComponent {
    providerForm: FormGroup;
    specialityOptions: SelectItem[];
    modalityOptions: SelectItem[] = [
        { label: 'Presencial', value: '0' },
        { label: 'Online', value: '1' }
    ];
    isLoading: boolean = false;
    private unsubscribe$ = new Subject<void>();

    constructor(
        private fb: FormBuilder,
        private providerService: ProviderService,
        private messageService: MessageService,
        public ref: DynamicDialogRef
    ) {
        this.specialityOptions = [
            { label: 'Cardiología', value: 'Cardiología' },
            { label: 'Neurología', value: 'Neurología' },
            { label: 'Pediatría', value: 'Pediatría' },
            { label: 'Oftalmología', value: 'Oftalmología' },
            { label: 'Nutrición', value: 'Nutrición' },
            { label: 'Psicología', value: 'Psicología' },
            { label: 'Ginecología', value: 'Ginecología' },
            { label: 'Medicina General', value: 'Medicina General' },
            { label: 'Odontología', value: 'Odontología' },
            { label: 'Gastroenterología', value: 'Gastroenterología' },

            // ...más especialidades...
        ];


    }

    ngOnInit() {


        this.providerForm = this.fb.group({
            phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
            speciality: new FormControl('', Validators.required),
            fee: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
            modality: new FormControl([], Validators.required),
            office: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            qaliComission: new FormControl('', Validators.required),
            file: new FormControl('', Validators.required),
        });
    }

    onFileChange(event) {
        if (event.files.length > 0) {
            const file = event.files[0];
            this.providerForm.patchValue({
                file: file
            });
        }
    }




    onFileUpload(event) {
        if (event.files.length > 0) {
            const file = event.files[0];
            this.providerForm.patchValue({
                file: file
            });

            // Recuerda limpiar el componente de carga si es necesario
            // event.files.clear();
        }
    }

    showToast(severity: string, summary: string, detail: string) {
        this.messageService.add({ severity, summary, detail });
    }


    onSubmit() {
        this.isLoading = true;
        console.log('Formulario:', this.providerForm.value);
        if (this.verifyFormValidity()) {
            const formData = new FormData();
            Object.entries(this.providerForm.value).forEach(([key, value]: [string, any]) => {
                if (key === 'file') {
                    if (value) {
                        formData.append('file', value, value.name); // Usa 'file' aquí también
                    }
                } else if (key === 'modality') {
                    // Asegúrate de que el valor siempre sea un array
                    if (!Array.isArray(value)) {
                        value = [value]; // Si no es un array, conviértelo en uno
                    }
                    // Ahora, value es definitivamente un array, así que lo tratamos como tal
                    value.forEach((val: string) => formData.append('modality[]', val)); // Usa 'modality[]' para que sea interpretado como un array
                } else {
                    formData.append(key, value);
                }
            });
            // console.log('Formulario:', formData);
            this.providerService.createProvider(formData)
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe({
                    next: (response) => {
                        console.log('Respuesta de la API:', response);
                        this.isLoading = false;
                        this.showToast('success', 'Éxito', 'Proveedor creado con éxito.');
                        this.ref.close('providerCreated');
                    },
                    error: (error) => {
                        console.error('Error al cargar los proveedores:', error);
                        this.isLoading = false;
                        this.showToast('error', 'Error', error.message);
                    }
                });

        } else {
            // Manejar el caso en que el formulario no sea válido
            this.isLoading = false;
        }
    }

    verifyFormValidity() {
        let isFormValid = true;

        if (this.providerForm.get('name').invalid) {
            this.showToast('error', 'Error', 'Nombre del hotel es requerido.');
            isFormValid = false;
        }
        if (this.providerForm.get('phone').invalid) {
            this.showToast('error', 'Error', 'Teléfono es requerido.');
            isFormValid = false;
        }
        if (this.providerForm.get('speciality').invalid) {
            this.showToast('error', 'Error', 'Especialidad es requerida.');
            isFormValid = false;
        }
        if (this.providerForm.get('fee').invalid) {
            this.showToast('error', 'Error', 'Tarifa es requerida.');
            isFormValid = false;
        }
        if (this.providerForm.get('modality').invalid) {
            this.showToast('error', 'Error', 'Modalidad es requerida.');
            isFormValid = false;
        }
        if (this.providerForm.get('office').invalid) {
            this.showToast('error', 'Error', 'Oficina es requerida.');
            isFormValid = false;
        }

        if (this.providerForm.get('file').invalid) {
            this.showToast('error', 'Error', 'Imagen del provider es requerida.');
            isFormValid = false;
        }
        // Repite esto para cada campo del formulario

        return isFormValid;
    }


}

