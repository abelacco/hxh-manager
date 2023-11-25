import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            // {
            //     label: 'Home',
            //     items: [
            //         { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
            //     ]
            // },
            {
                label: 'Panel de Control',
                items: [

                    { label: 'Citas', icon: 'pi pi-fw pi-table', routerLink: ['/citas'] },
                    { label: 'Doctores', icon: 'pi pi-fw pi-table', routerLink: ['/doctores'] },
                    {
                        label: 'Liquidaciones',
                        icon: 'pi pi-fw pi-money-bill', // Puedes cambiar el icono según tus necesidades
                        items: [
                            { label: 'Doctores', icon: 'pi pi-fw pi-user', routerLink: ['/liquidaciones/doctores'] },
                            { label: 'Hunter', icon: 'pi pi-fw pi-user-plus', routerLink: ['/liquidaciones/hunter'] },
                            { label: 'Bodega', icon: 'pi pi-fw pi-users', routerLink: ['/liquidaciones/bodega'] },
                            { label: 'Hunter Doctor', icon: 'pi pi-fw pi-user-edit', routerLink: ['/liquidaciones/hunter-doctor'] }
                        ]
                    },

                ]
            },

        ];
    }
}
