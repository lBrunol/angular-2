import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from '../classes/Curso';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Util, httpOptions } from '../classes/Util';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class CursosService {

  private cursosUrl = 'api/cursos';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getCursos() : Observable<Curso[]>{
    return this.http.get<Curso[]>(this.cursosUrl)
      .pipe(
        tap(cursos => this.log('Cursos recuperados')),
        catchError(Util.handleError('getCursos', []))
      );
  }

  getCurso(id: string) : Observable<Curso>{
    return this.http.get<Curso>(this.cursosUrl + `/${id}`)
      .pipe(
        tap(curso => this.log(`Curso recuperado: ID: ${id}`)),
        catchError(Util.handleError<Curso>(`getCurso id=${id}`))
      );
  }

  addCurso(curso: Curso) : Observable<any>{
    return this.http.post<Curso>(this.cursosUrl, curso, httpOptions)
      .pipe(
        tap(f => this.log(`Curso inserido: ID: ${curso.id}`)),
        catchError(Util.handleError<Curso>('addCurso'))
      );
  }

  updateCurso(curso: Curso): Observable<any>{
    return this.http.put(this.cursosUrl, curso, httpOptions)
      .pipe(
        tap(f => this.log(`Curso atualizado: ID: ${curso.id}`)),
        catchError(Util.handleError<any>('updateCurso'))
      );
  }

  deleteCurso(id: string|number) : Observable<Curso>{
    return this.http.delete<Curso>(this.cursosUrl + `/${id}`, httpOptions)
      .pipe(
        tap(f => this.log(`Curso apagado: ID: ${id}`)),
        catchError(Util.handleError<Curso>('deleteCurso'))
      );
  }

  searchCurso(curso: string) : Observable<Curso[]>{
    if(!curso.trim()) return this.getCursos();

    return this.http.get<Curso[]>(this.cursosUrl + `/?nome=${curso}`)
      .pipe(
        tap(f=> this.log(`Curso encontrado com o termo "${curso}"`)),
        catchError(Util.handleError<Curso[]>('searchCurso'))
      );
  }  

  private log(message: string) {
    this.messageService.add('CursosService: ' + message);
  }
}