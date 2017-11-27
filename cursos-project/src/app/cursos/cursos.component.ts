import { Component, OnInit, HostBinding } from '@angular/core';
import { CursosService } from './cursos.service';
import { Observable } from 'rxjs/Observable';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';
import { Curso } from '../classes/Curso';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.styl'],
  animations: [slideInDownAnimation]
})
export class CursosComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  cursos = new Array<Curso>();
  searchCursos = new Subject<string>();
  consultou: boolean = false;
  page: number = 1;

  constructor(private cursosService: CursosService, private router: Router) { }

  ngOnInit() {
    this.cursosService.getCursos()
      .subscribe(cursos => { 
        this.cursos = cursos;
        this.consultou = true;
      });

    this.searchCursos.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((curso: string) => this.cursosService.searchCurso(curso))
    ).subscribe(cursos => this.cursos = cursos);
  }

  cadastrarCurso(){
    this.router.navigate(['/cursos/adicionar']);
  }

  pesquisarCurso(curso: string){
    this.searchCursos.next(curso);
  }

}
