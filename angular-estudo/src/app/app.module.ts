import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { MyFirstComponent } from './components/my-first.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { CursosModule } from "./cursos/cursos.module";

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }