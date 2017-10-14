import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.styl']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
