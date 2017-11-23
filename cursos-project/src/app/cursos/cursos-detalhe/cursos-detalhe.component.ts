import { Component, OnInit, OnDestroy, HostBinding, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CursosService } from '../cursos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { slideInDownAnimation } from '../../animations';
import { Subscription } from 'rxjs/Subscription';
import { Curso } from '../../classes/Curso';
import { MaterializeAction } from 'angular2-materialize';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Util } from '../../classes/Util';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.styl'],
  animations: [slideInDownAnimation]
})
export class CursosDetalheComponent implements OnInit, OnDestroy {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  
  curso = new Curso(null, null, null, null);
  modalEvent = new EventEmitter<string|MaterializeAction>();
  cursoForm: FormGroup;
  isEdit: boolean = false;
  precoMask = Object.freeze({
    mask: createNumberMask({
      prefix: 'R$ ',
      allowDecimal: true,
      integerLimit: 7,
      thousandsSeparatorSymbol: '.',
      decimalSymbol: ','
    })
  });
  precoUnmask: Function = Util.currencyToNumber;

  cursoInitSubscription: Subscription;
  cursoUpdateSubscription: Subscription;
  cursoAddSubscription: Subscription;
  cursoDeleteSubscription: Subscription;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private cursosService: CursosService,
    private fb: FormBuilder) { 
      this.createForm();
  }

  createForm(): any {
    this.cursoForm = this.fb.group({
      nome: ['', Validators.required],
      duracao: '',
      preco: ''
    });
  }

  ngOnInit() {
    this.cursoInitSubscription = this.activatedRoute.data.subscribe(
      (data: { curso: Curso }) => {
        if(Object.keys(data).length > 0 && data.constructor === Object){
          this.isEdit = true;
          this.curso = data.curso;
          this.cursoForm.reset({
            nome: this.curso.nome,
            duracao: this.curso.duracao,
            preco: 'R$' + Util.numberToCurrency(this.curso.preco)
          });
        }
      }
    );
  }
  
  ngOnDestroy(){
    this.cursoInitSubscription.unsubscribe();
    if(this.cursoDeleteSubscription) this.cursoDeleteSubscription.unsubscribe();
    if(this.cursoAddSubscription) this.cursoAddSubscription.unsubscribe();
    if(this.cursoUpdateSubscription) this.cursoUpdateSubscription.unsubscribe();
  }

  gotoCursos(){
    this.router.navigate(['/cursos']);
  }

  onSubmit(){    
    if(this.isEdit){
      this.curso = this.prepareCurso();
      this.cursoUpdateSubscription = this.cursosService.updateCurso(this.curso)
        .subscribe(f => this.gotoCursos());
    } else {
      this.curso = this.prepareCurso();
      this.cursoAddSubscription = this.cursosService.addCurso(this.curso)
        .subscribe((curso: Curso) => {
          this.curso = curso;
          this.redirectAfterAdd();
        });
    }
  }

  redirectAfterAdd(){
    this.router.navigate(['/cursos/detalhe', this.curso.id]);
  }

  prepareCurso() : Curso{
    const formValues = this.cursoForm.value;

    const saveCurso: Curso = {
      id: this.curso.id || Math.floor(Math.random() * (99999 - 5)) + 5,
      nome: formValues.nome as string,
      duracao: formValues.duracao as string,
      preco: Util.currencyToNumber(formValues.preco)
    };

    return saveCurso;
  }

  deleteCurso(){
    this.cursoDeleteSubscription = this.cursosService.deleteCurso(this.curso.id)
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
