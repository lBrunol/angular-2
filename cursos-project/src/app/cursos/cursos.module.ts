import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CursosRoutingModule } from "./cursos-routing.module";

import { CursosComponent } from "./cursos.component";
import { CursosDetalheComponent } from "./cursos-detalhe/cursos-detalhe.component";
import { CursosService } from "./cursos.service";
import { CursoDetalheResolver } from "./guards/curso-detalhe.resolver";

@NgModule({    
    imports: [
        SharedModule,
        CursosRoutingModule
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