import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CursosService, Curso } from '../cursos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.styl'],
  animations: [slideInDownAnimation]
})
export class CursosDetalheComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  curso$: Observable<Curso>;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private cursosService: CursosService) { }

  ngOnInit() {
    this.curso$ = this.activatedRoute.paramMap.switchMap((params: ParamMap) => this.cursosService.getCurso(params.get('id')));
  }

  gotoCursos(){
    this.router.navigate(['/cursos']);
  }

  updatePreco(value: string){
    try{
      return Number(value.replace(/[^0-9\,-]+/g,"").replace(",","."));
    }catch(e) {
      return 0;
    }
  }

}
