import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aluno } from '../classes/Aluno';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Util, httpOptions } from '../classes/Util';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class AlunosService {

  private alunosUrl = 'api/alunos';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getAlunos() : Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.alunosUrl)
      .pipe(
        tap(alunos => this.log('Alunos recuperados')),
        catchError(Util.handleError('getAlunos', []))
      );
  }

  getAluno(id: string) : Observable<Aluno>{
    return this.http.get<Aluno>(this.alunosUrl + `/${id}`)
      .pipe(
        tap(aluno => this.log(`Aluno recuperado: ID: ${id}`)),
        catchError(Util.handleError<Aluno>(`getAluno id=${id}`))
      );
  }

  addAluno(aluno: Aluno) : Observable<any>{
    return this.http.post<Aluno>(this.alunosUrl, aluno, httpOptions)
      .pipe(
        tap(f => this.log(`Aluno inserido: ID: ${aluno.id}`)),
        catchError(Util.handleError<Aluno>('addAluno'))
      );
  }

  updateAluno(aluno: Aluno): Observable<any>{
    return this.http.put(this.alunosUrl, aluno, httpOptions)
      .pipe(
        tap(f => this.log(`Aluno atualizado: ID: ${aluno.id}`)),
        catchError(Util.handleError<any>('updateAluno'))
      );
  }

  deleteAluno(id: string|number) : Observable<Aluno>{
    return this.http.delete<Aluno>(this.alunosUrl + `/${id}`, httpOptions)
      .pipe(
        tap(f => this.log(`Aluno apagado: ID: ${id}`)),
        catchError(Util.handleError<Aluno>('deleteAluno'))
      );
  }

  searchAluno(aluno: string) : Observable<Aluno[]>{
    if(!aluno.trim()) return this.getAlunos();

    return this.http.get<Aluno[]>(this.alunosUrl + `/?nome=${aluno}`)
      .pipe(
        tap(f=> this.log(`Aluno encontrado com o termo "${aluno}"`)),
        catchError(Util.handleError<Aluno[]>('searchAluno'))
      );
  }  

  private log(message: string) {
    this.messageService.add('AlunosService: ' + message);
  }
}