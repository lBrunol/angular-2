import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterializeModule } from "angular2-materialize";
import { TextMaskModule } from 'angular2-text-mask';
import { CursosRoutingModule } from "./cursos-routing.module";

import { CursosComponent } from "./cursos.component";
import { CursosDetalheComponent } from "./cursos-detalhe/cursos-detalhe.component";
import { CursosService } from "./cursos.service";
import { CursoDetalheResolver } from "./guards/curso-detalhe.resolver";
import { UnmaskDirective } from "../directives/unmask.directive";

@NgModule({    
    imports: [
        CommonModule,
        CursosRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterializeModule,
        TextMaskModule
    ],
    declarations: [
        CursosComponent,
        CursosDetalheComponent,
        UnmaskDirective
    ],
    providers: [
        CursosService,
        CursoDetalheResolver
    ]
})
export class CursosModule{

}