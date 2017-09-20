import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<any>();
  static criouNovoCurso = new EventEmitter<any>();

  cursos: Array<any> = ['Angular 4', 'Asp.NET MVC', 'Java', 'Javascript'];
  novosCursos: Array<Object> = [
    {
      nome: 'Angular 4',
      aulas: 25,
      dataPublicacao: new Date('2017/01/15'),
      preco: 599.99
    },
    {
      nome: 'ASP.NET MVC',
      aulas: 40,
      dataPublicacao: new Date('2017/06/01'),
      preco: 1099.99
    },
    {
      nome: 'Java Básico',
      aulas: 40,
      dataPublicacao: new Date('2017/07/01'),
      preco: 1099.99
    },
    {
      nome: 'Javascript para iniciantes',
      aulas: 60,
      dataPublicacao: new Date('2017/10/15'),
      preco: 799.99
    }
  ]

  constructor(private logService: LogService) { }

  getCursos(){
    this.logService.consoleLog('Pegando um curso');
    return this.cursos;
  }

  getNovosCursos(){
    return this.novosCursos;
  }

  addCurso(curso){
    this.logService.consoleLog(`Adicionando o curso: ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
