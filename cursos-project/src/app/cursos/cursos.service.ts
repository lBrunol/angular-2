import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export class Curso{
  constructor(public id: number, public nome: string, public duracao: string, public preco: number) { }  
}

@Injectable()
export class CursosService {

  cursos = [
    new Curso(1, 'Java básico', '4 meses', 600),
    new Curso(2, 'Java intermediário', '3 meses', 800),
    new Curso(3, 'Herói do front-end', '6 meses', 1200),
    new Curso(4, 'Herói do javascript', '3 meses', 400)
  ];

  constructor() { }

  getCursos(){
    return Observable.of(this.cursos);
  }

  getCurso(id: string){
    return this.getCursos().map(cursos => cursos.find(curso => curso.id === parseInt(id)));
  }
}
