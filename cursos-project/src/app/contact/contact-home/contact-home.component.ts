import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from "../../contact.service";
import { Subscription } from "rxjs/Subscription";
import { Contato } from "../../classes/Contato";

@Component({
  selector: 'contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.styl']
})
export class ContactHomeComponent implements OnInit, OnDestroy {
  
  contatoInitSubscription: Subscription;
  contatoUpdatedSubscription: Subscription;
  contatos = new Array<Contato>();

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contatoInitSubscription = this.contactService.getContatos().subscribe(contatos => {
      this.contatos = contatos;
    });
    this.contatoUpdatedSubscription = this.contactService.updatedContato$.subscribe((contato) => {
      this.contatos.push(contato);
    });
    
  }

  ngOnDestroy() {
    this.contatoInitSubscription.unsubscribe();
    if(this.contatoUpdatedSubscription) this.contatoUpdatedSubscription.unsubscribe();
  }

}