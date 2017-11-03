import { Component, Output } from '@angular/core';

import { MaterializeDirective, MaterializeAction } from "angular2-materialize";
import { EventEmitter } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'app';

  constructor(private contactService: ContactService) { 
  }

  openContactModal(){
    this.contactService.openModal();
  }
}
