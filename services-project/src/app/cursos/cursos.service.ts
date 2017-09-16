import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<any>();
  static criouNovoCurso = new EventEmitter<any>();

  cursos: Array<any> = ['Angular 4', 'Asp.NET MVC', 'Java', 'Javascript'];

  constructor(private logService: LogService) { }

  getCursos(){
    this.logService.consoleLog('Pegando um curso');
    return this.cursos;
  }

  addCurso(curso){
    this.logService.consoleLog(`Adicionando o curso: ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
