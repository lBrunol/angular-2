import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.styl'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: Array<any>;


  constructor(private cursosService: CursosService) { 
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
