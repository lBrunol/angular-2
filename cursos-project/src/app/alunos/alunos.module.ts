import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AlunosRoutingModule } from "./alunos-routing.module";

import { AlunosComponent } from "./alunos.component";
import { AlunosDetalheComponent } from "./alunos-detalhe/alunos-detalhe.component";
import { AlunosService } from "./alunos.service";
import { AlunoDetalheResolver } from "./guards/aluno-detalhe.resolver";

@NgModule({
    imports: [
        SharedModule,
        AlunosRoutingModule
    ],
    declarations: [
        AlunosComponent,
        AlunosDetalheComponent
    ],
    providers: [
        AlunosService,
        AlunoDetalheResolver
    ]
})
export class AlunosModule{

}