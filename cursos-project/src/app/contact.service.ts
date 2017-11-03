import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContactService {

  private openModalSource = new Subject<any>();

  openedModal$ = this.openModalSource.asObservable();

  constructor() { }

  openModal(){
    this.openModalSource.next();
  }

}
