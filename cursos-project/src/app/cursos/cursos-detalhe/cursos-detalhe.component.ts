import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CursosService, Curso } from '../cursos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { slideInDownAnimation } from '../../animations';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.styl'],
  animations: [slideInDownAnimation]
})
export class CursosDetalheComponent implements OnInit, OnDestroy {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  curso$: Observable<Curso>;
  inscricao: Subscription;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private cursosService: CursosService) { }

  ngOnInit() {
    this.inscricao = this.activatedRoute.data.subscribe(
      (data: { curso: Curso }) => {
        this.curso$ = Observable.of(data.curso);
      }
    );
  }
  
  ngOnDestroy(){
    this.inscricao.unsubscribe();
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
