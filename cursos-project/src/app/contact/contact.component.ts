import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import { ContactService } from '../contact.service';
import { Subscription }   from 'rxjs/Subscription';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Contato } from "../classes/Contato";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})
export class ContactComponent implements OnInit, OnDestroy {

  modalEvent = new EventEmitter<string|MaterializeAction>();
  subscription: Subscription;
  contatoForm: FormGroup;
  contato: Contato;
  contatoAddSubscription: Subscription;

  get nome() { return this.contatoForm.get('nome'); }
  get mensagem() { return this.contatoForm.get('mensagem'); }  
  
  constructor(private router: Router, private contactService: ContactService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.contatoForm.valid){
      this.contato = this.prepeareContato();
      this.contatoAddSubscription = this.contactService.addContato(this.contato).subscribe((contato: Contato) => {
        alert('Contato enviado com sucesso');
        this.closeContactModal();
      });
    }
  }

  prepeareContato(){
    const formValues = this.contatoForm.value;

    const saveContato:Contato = {
      id: Math.floor(Math.random() * (99999 - 5)) + 5,
      nome: formValues.nome as string,
      mensagem: formValues.mensagem as string
    };

    return saveContato;
  }

  openContactModal(){
    this.modalEvent.emit({action:"modal", params:['open']});
  }

  closeContactModal(){
    this.modalEvent.emit({action:"modal", params:['close']});
    this.fechar();
  }

  fechar() {
    this.router.navigate([{ outlets: { contato: null }}]);
  }
  
  ngOnInit() {
    this.subscription = this.contactService.openedModal$.subscribe(open => this.openContactModal());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if(this.contatoAddSubscription) this.contatoAddSubscription.unsubscribe();
  }
  
}
