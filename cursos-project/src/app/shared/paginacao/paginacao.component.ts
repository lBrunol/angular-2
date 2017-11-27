import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.styl']
})
export class PaginacaoComponent implements OnInit {
  
  private _autoHide: boolean = false;

  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Input()
  get autoHide(): boolean {
      return this._autoHide;
  }
  set autoHide(value: boolean) {
      this._autoHide = !!value && <any>value !== 'false';
  }

  constructor() { }

  ngOnInit() {
  }

}
