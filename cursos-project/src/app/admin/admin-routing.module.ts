import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';

const adminRoutes: Routes = [
    { path: '' , component: AdminComponent },
    { path: 'admin/contatos' , component: AdminContactComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {

}