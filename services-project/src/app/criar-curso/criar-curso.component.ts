import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.styl'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: Array<any>;

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

  addCurso(value){
    this.cursosService.addCurso(value);
  }

}
