import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';

import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
import { LoginService } from './login/login.service';
import { LoginGuard } from './guards/login.guard';
import { CursosGuard } from './guards/cursos.guard';
import { MessageService } from './message.service';
import { CadastroAlunosComponent } from './graficos/cadastro-alunos/cadastro-alunos.component';

@NgModule({  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule,
    AppRoutingModule,
    AdminRoutingModule,
    AdminModule,
    ChartsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    PaginaNaoEncontradaComponent,
    CadastroAlunosComponent,
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
