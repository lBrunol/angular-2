import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-pipes',
  templateUrl: './curso-pipes.component.html',
  styleUrls: ['./curso-pipes.component.styl']
})
export class CursoPipesComponent implements OnInit {

  cursos: Array<Object>;
  
  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getNovosCursos();
  }

  addCurso(value){
    this.cursosService.addCurso(value);
  }

}
