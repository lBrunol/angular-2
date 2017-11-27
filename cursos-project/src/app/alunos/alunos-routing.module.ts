import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlunosComponent } from "./alunos.component";
import { AlunosDetalheComponent } from "./alunos-detalhe/alunos-detalhe.component";
import { AlunoDetalheResolver } from "./guards/aluno-detalhe.resolver";

const alunosRoutes: Routes = [
    { path: '', component: AlunosComponent },
    { path: 'detalhe/:id', component: AlunosDetalheComponent, resolve: { aluno: AlunoDetalheResolver } },
    { path: 'adicionar', component: AlunosDetalheComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(alunosRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AlunosRoutingModule{
    
}