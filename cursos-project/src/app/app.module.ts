import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosDetalheComponent } from './cursos/cursos-detalhe/cursos-detalhe.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { ContactService } from './contact.service';
import { LoginService } from './login/login.service';
import { LoginGuard } from './guards/login.guard';
import { CursosGuard } from './guards/cursos.guard';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,   
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    ContactService,
    LoginService,
    MessageService,
    LoginGuard,
    CursosGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
