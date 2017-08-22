import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-diretiva-ngif',
	templateUrl: './diretiva-ngif.component.html',
	styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

	cursos: string[] = [];

	constructor() { }

	ngOnInit() {
	}

	adicionarCurso() {
		let inp: HTMLInputElement = <HTMLInputElement> document.querySelector('.ang-txt-curso');
		this.cursos.push(inp.value);
		inp.value = '';
	}
	  
	removerCurso(e){
		if(e.srcElement) {
			let el: HTMLAnchorElement = <HTMLAnchorElement> e.srcElement;
			let i: number = parseInt(el.getAttribute('data-index'));
			this.cursos.splice(i, 1);
		}
	}

}
