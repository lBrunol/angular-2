import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos/alunos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
  providers: [AlunosService]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
