import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://google.com.br';
  urlImage: string = 'http://lorempixel.com/400/200';

  constructor() { }

  getValor() {
    return 1;
  }

  ngOnInit() {
  }

}
