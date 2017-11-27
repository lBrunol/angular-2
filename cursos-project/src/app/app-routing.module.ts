import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginGuard } from "./guards/login.guard";
import { CursosGuard } from "./guards/cursos.guard";

const appRoutes: Routes = [
    { path: 'cursos', loadChildren: 'app/cursos/cursos.module.ts#CursosModule', canActivate: [LoginGuard], canActivateChild: [CursosGuard] },
    { path: 'alunos', loadChildren: 'app/alunos/alunos.module.ts#AlunosModule', canActivate: [LoginGuard], canActivateChild: [CursosGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
    { path: 'contato', component: ContactComponent, outlet: 'contato', canActivate: [LoginGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [LoginGuard] },
    { path: '**', component: PaginaNaoEncontradaComponent, canActivate: [LoginGuard] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}