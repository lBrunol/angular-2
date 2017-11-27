import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { UnmaskDirective } from '../directives/unmask.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterializeModule,
        TextMaskModule,
        NgxPaginationModule
    ],
    declarations: [
        PaginacaoComponent,
        UnmaskDirective
    ],
    exports: [
        PaginacaoComponent,
        UnmaskDirective,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterializeModule,
        TextMaskModule,
        NgxPaginationModule
    ]
})
export class SharedModule{

}