import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { ContactAdminService } from './contact-admin.service';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminContactComponent
    ],
    exports: [

    ],
    providers: [
        ContactAdminService
    ]
})
export class AdminModule {

}