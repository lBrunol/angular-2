import { Component, OnInit } from '@angular/core';
import { ContactService } from "../../contact.service";
import { Subscription } from "rxjs/Subscription";
import { Contato } from "../../classes/Contato";

@Component({
  selector: 'contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.styl']
})
export class ContactHomeComponent implements OnInit {

  contatoInitSubscription: Subscription;
  contatos = new Array<Contato>();

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contatoInitSubscription = this.contactService.getContatos().subscribe(contatos => {
      this.contatos = contatos;
    });
  }

}
