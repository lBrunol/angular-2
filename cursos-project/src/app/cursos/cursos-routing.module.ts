import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from "./cursos.component";
import { CursosDetalheComponent } from "./cursos-detalhe/cursos-detalhe.component";

const cursosRoutes: Routes = [
    { path: '', component: CursosComponent },
    { path: 'detalhe/:id', component: CursosDetalheComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(cursosRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CursosRoutingModule{

}