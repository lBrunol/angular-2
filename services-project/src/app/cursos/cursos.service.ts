import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  cursos: Array<any> = ['Angular 4', 'Asp.NET MVC', 'Java', 'Javascript'];

  constructor() { }

  getCursos(){
    return this.cursos;
  }

  addCurso(curso){
    this.cursos.push(curso);
  }

}
