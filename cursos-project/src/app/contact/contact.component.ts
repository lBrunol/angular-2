import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import { ContactService } from '../contact.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})
export class ContactComponent implements OnInit, OnDestroy { 

  modalEvent = new EventEmitter<string|MaterializeAction>();
  subscription: Subscription;
  
  openContactModal(){
    this.modalEvent.emit({action:"modal", params:['open']});
  }

  closeContactModal(){
    this.modalEvent.emit({action:"modal", params:['close']});
    this.fechar();
  }
  
  constructor(private router: Router, private contactService: ContactService) { 
    this.subscription = this.contactService.openedModal$.subscribe(open => this.openContactModal());
  }
  
  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
