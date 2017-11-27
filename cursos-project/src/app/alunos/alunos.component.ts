import { Component, OnInit, HostBinding } from '@angular/core';
import { AlunosService } from './alunos.service';
import { Observable } from 'rxjs/Observable';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';
import { Aluno } from '../classes/Aluno';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.styl'],
  animations: [slideInDownAnimation]
})
export class AlunosComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  alunos = new Array<Aluno>();
  searchAlunos = new Subject<string>();
  consultou: boolean = false;
  page: number = 1;

  constructor(private alunosService: AlunosService, private router: Router) { }

  ngOnInit() {
    this.alunosService.getAlunos()
      .subscribe(alunos => { 
        this.alunos = alunos;
        this.consultou = true;
      });

    this.searchAlunos.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((curso: string) => this.alunosService.searchAluno(curso))
    ).subscribe(alunos => this.alunos = alunos);
  }

  cadastrarAluno(){
    this.router.navigate(['/alunos/adicionar']);
  }

  pesquisarAluno(curso: string){
    this.searchAlunos.next(curso);
  }
}
