import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from "./cursos.component";
import { CursosDetalheComponent } from "./cursos-detalhe/cursos-detalhe.component";
import { CursoDetalheResolver } from "./guards/curso-detalhe.resolver";

const cursosRoutes: Routes = [
    { path: '', component: CursosComponent },
    { path: 'detalhe', component: CursosDetalheComponent },
    { path: 'detalhe/:id', component: CursosDetalheComponent, resolve: { curso : CursoDetalheResolver } }
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