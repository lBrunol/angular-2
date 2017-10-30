import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

const appRoutes: Routes = [
    { path: 'cursos', loadChildren: 'app/cursos/cursos.module.ts#CursosModule' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent }
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