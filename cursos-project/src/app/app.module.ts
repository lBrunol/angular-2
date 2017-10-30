import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosDetalheComponent } from './cursos/cursos-detalhe/cursos-detalhe.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,   
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
