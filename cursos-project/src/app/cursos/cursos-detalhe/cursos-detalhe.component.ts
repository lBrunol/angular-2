import { Component, OnInit, OnDestroy, HostBinding, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CursosService } from '../cursos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { slideInDownAnimation } from '../../animations';
import { Subscription } from 'rxjs/Subscription';
import { Curso } from '../../classes/Curso';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.styl'],
  animations: [slideInDownAnimation]
})
export class CursosDetalheComponent implements OnInit, OnDestroy {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  curso: Curso;
  inscricao: Subscription;
  modalEvent = new EventEmitter<string|MaterializeAction>();

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private cursosService: CursosService) { }

  ngOnInit() {
    this.inscricao = this.activatedRoute.data.subscribe(
      (data: { curso: Curso }) => {
        this.curso = data.curso;
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

  updateCurso(){
    this.cursosService.updateCurso(this.curso)
      .subscribe(f => this.gotoCursos());
  }

  deleteCurso(){
    this.cursosService.deleteCurso(this.curso.id)
      .subscribe(f => { 
        this.closeModal();
        this.gotoCursos();
      });
  }

  
  openModal(){
    this.modalEvent.emit({action:"modal", params:['open']});
  }

  closeModal(){
    this.modalEvent.emit({action:"modal", params:['close']});
  }

}
