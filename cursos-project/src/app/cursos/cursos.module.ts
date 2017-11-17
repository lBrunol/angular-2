import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CursosRoutingModule } from "./cursos-routing.module";
import { FormsModule } from "@angular/forms";

import { CursosComponent } from "./cursos.component";
import { CursosDetalheComponent } from "./cursos-detalhe/cursos-detalhe.component";
import { CursosService } from "./cursos.service";
import { CursoDetalheResolver } from "./guards/curso-detalhe.resolver";
import { MaterializeModule } from "angular2-materialize";

@NgModule({    
    imports: [
        CommonModule,
        CursosRoutingModule,
        FormsModule,
        MaterializeModule
    ],
    declarations: [
        CursosComponent,
        CursosDetalheComponent
    ],
    providers: [
        CursosService,
        CursoDetalheResolver
    ]
})
export class CursosModule{

}