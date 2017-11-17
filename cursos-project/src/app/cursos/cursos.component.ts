import { Component, OnInit, HostBinding } from '@angular/core';
import { CursosService } from './cursos.service';
import { Observable } from 'rxjs/Observable';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';
import { Curso } from '../classes/Curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.styl'],
  animations: [slideInDownAnimation]
})
export class CursosComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  cursos$: Observable<Curso[]>;

  constructor(private cursosService: CursosService, private router: Router) { }

  ngOnInit() {
    this.cursos$ = this.cursosService.getCursos();
  }

  cadastrarCurso(){
    this.router.navigate(['/cursos/detalhe']);
  }

}
