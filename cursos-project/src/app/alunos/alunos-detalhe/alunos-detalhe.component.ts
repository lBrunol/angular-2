import { Component, OnInit, OnDestroy, HostBinding, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { slideInDownAnimation } from '../../animations';
import { Subscription } from 'rxjs/Subscription';
import { Aluno } from '../../classes/Aluno';
import { MaterializeAction } from 'angular2-materialize';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Util } from '../../classes/Util';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.styl'],
  animations: [slideInDownAnimation]
})
export class AlunosDetalheComponent implements OnInit , OnDestroy {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  
  aluno = new Aluno(null, null, null, null, null);
  modalEvent = new EventEmitter<string|MaterializeAction>();
  alunoForm: FormGroup;
  isEdit: boolean = false;

  alunoInitSubscription: Subscription;
  alunoUpdateSubscription: Subscription;
  alunoAddSubscription: Subscription;
  alunoDeleteSubscription: Subscription;

  get nome() { return this.alunoForm.get('nome'); }
  get sobrenome() { return this.alunoForm.get('sobrenome'); }
  get dataNascimento() { return this.alunoForm.get('dataNascimento'); }
  get sexo() { return this.alunoForm.get('sexo'); }

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private alunosService: AlunosService,
    private fb: FormBuilder) { 
      this.createForm();
  }

  createForm(): any {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.alunoInitSubscription = this.activatedRoute.data.subscribe(
      (data: { aluno: Aluno }) => {
        if(Object.keys(data).length > 0 && data.constructor === Object){
          this.isEdit = true;
          this.aluno = data.aluno;
          this.alunoForm.reset({
            nome: this.aluno.nome,
            sobrenome: this.aluno.sobrenome,
            sexo: this.aluno.sexo,
            dataNascimento: this.aluno.dataNascimento
          });
        }
      }
    );
  }
  
  ngOnDestroy(){
    this.alunoInitSubscription.unsubscribe();
    if(this.alunoDeleteSubscription) this.alunoDeleteSubscription.unsubscribe();
    if(this.alunoAddSubscription) this.alunoAddSubscription.unsubscribe();
    if(this.alunoUpdateSubscription) this.alunoUpdateSubscription.unsubscribe();
  }

  gotoAlunos(){
    this.router.navigate(['/alunos']);
  }

  onSubmit(){
    if(this.alunoForm.valid){
      if(this.isEdit){
        this.aluno = this.prepareAluno();
        this.alunoUpdateSubscription = this.alunosService.updateAluno(this.aluno)
          .subscribe(f => this.gotoAlunos());
      } else {
        this.aluno = this.prepareAluno();
        this.alunoAddSubscription = this.alunosService.addAluno(this.aluno)
          .subscribe((aluno: Aluno) => {
            this.aluno = aluno;
            this.redirectAfterAdd();
          });
      }
    }
  }

  redirectAfterAdd(){
    this.router.navigate(['/alunos/detalhe', this.aluno.id]);
  }

  prepareAluno() : Aluno {
    const formValues = this.alunoForm.value;

    const saveAluno: Aluno = {
      id: this.aluno.id || Math.floor(Math.random() * (99999 - 5)) + 5,
      nome: formValues.nome as string,
      sobrenome: formValues.sobrenome as string,
      sexo: formValues.sexo as string,
      dataNascimento: formValues.dataNascimento as string
    };

    return saveAluno;
  }

  deleteAluno(){
    this.alunoDeleteSubscription = this.alunosService.deleteAluno(this.aluno.id)
      .subscribe(f => { 
        this.closeModal();
        this.gotoAlunos();
      });
  }
  
  openModal(){
    this.modalEvent.emit({action:"modal", params:['open']});
  }

  closeModal(){
    this.modalEvent.emit({action:"modal", params:['close']});
  }

}