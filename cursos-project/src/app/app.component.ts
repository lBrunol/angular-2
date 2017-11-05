import { Component, Output, OnInit } from '@angular/core';

import { MaterializeDirective, MaterializeAction } from "angular2-materialize";
import { EventEmitter } from '@angular/core';
import { ContactService } from './contact.service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';
  mostrarMenu: boolean = false;

  constructor(private contactService: ContactService, private loginService: LoginService) { 
  }

  ngOnInit(){
    this.loginService.mostrarMenuEmitter.subscribe(mostrar => this.mostrarMenu = mostrar);
  }

  openContactModal(){
    this.contactService.openModal();
  }
}
