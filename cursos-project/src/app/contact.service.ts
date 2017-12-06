import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Util, httpOptions } from "./classes/Util";
import { Contato } from "./classes/Contato";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class ContactService {

  private openModalSource = new Subject<any>();
  private updatedContatoSource = new Subject<Contato>();
  private contatosUrl = 'api/contatos';

  openedModal$ = this.openModalSource.asObservable();
  updatedContato$ = this.updatedContatoSource.asObservable();

  constructor(private http: HttpClient, private messageService: MessageService) { }

  openModal(){
    setTimeout(f=> {
      this.openModalSource.next(true);
    }, 50);
  }

  getContatos() : Observable<Contato[]>{
    return this.http.get<Contato[]>(this.contatosUrl)
      .pipe(
        tap(contatos => this.log('Contatos recuperados')),
        catchError(Util.handleError('getContatos', []))
      );
  }

  getContato(id: string) : Observable<Contato>{
    return this.http.get<Contato>(this.contatosUrl + `/${id}`)
      .pipe(
        tap(contato => this.log(`Contato recuperado: ID: ${id}`)),
        catchError(Util.handleError<Contato>(`getContato id=${id}`))
      );
  }

  addContato(contato: Contato) : Observable<any>{
    return this.http.post<Contato>(this.contatosUrl, contato, httpOptions)
      .pipe(
        tap((contatoAdicionado: Contato) => {
          this.updatedContatoSource.next(contatoAdicionado);
          this.log(`Contato inserido: ID: ${contato.id}`)
        }),
        catchError(Util.handleError<Contato>('addContato'))
      );
  }

  updateContato(contato: Contato): Observable<any>{
    return this.http.put(this.contatosUrl, contato, httpOptions)
      .pipe(
        tap(f => this.log(`Contato atualizado: ID: ${contato.id}`)),
        catchError(Util.handleError<any>('updateContato'))
      );
  }

  deleteContato(id: string|number) : Observable<Contato>{
    return this.http.delete<Contato>(this.contatosUrl + `/${id}`, httpOptions)
      .pipe(
        tap(f => this.log(`Contato apagado: ID: ${id}`)),
        catchError(Util.handleError<Contato>('deleteContato'))
      );
  }

  searchContato(contato: string) : Observable<Contato[]>{
    if(!contato.trim()) return this.getContatos();

    return this.http.get<Contato[]>(this.contatosUrl + `/?nome=${contato}`)
      .pipe(
        tap(f=> this.log(`Contato encontrado com o termo "${contato}"`)),
        catchError(Util.handleError<Contato[]>('searchContato'))
      );
  }  

  private log(message: string) {
    this.messageService.add('ContatosService: ' + message);
  }

}
