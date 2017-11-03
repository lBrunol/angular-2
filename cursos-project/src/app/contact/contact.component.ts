import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})
export class ContactComponent implements OnInit {

  modalEvent = new EventEmitter<string|MaterializeAction>();
  
  openContactModal(){
    console.log('ola');
    this.modalEvent.emit({action:"modal", params:['open']});
  }

  closeContactModal(){
    this.modalEvent.emit({action:"modal", params:['close']});
    this.fechar();
  }
  
  constructor(private router: Router, private contactService: ContactService) { 
    this.contactService.openedModal$.subscribe(open => this.openContactModal());
  }
  
  ngOnInit() {
    console.log('iniciei');
  }
  
  enviar(){
    setTimeout(() => {
      alert('Enviado');
      this.fechar();
    }, 500);
  }

  fechar() {
    this.router.navigate([{ outlets: { contato: null }}]);
  }

}
