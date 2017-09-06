import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/Curso';

@Component({
	selector: 'app-diretiva-ngif',
	templateUrl: './diretiva-ngif.component.html',
	styleUrls: ['./diretiva-ngif.component.styl']
})
export class DiretivaNgifComponent implements OnInit {

	listCursos: Array<Curso> = [];

	isFavorito: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	keyPressAdicionarCurso(e){
		if(e.keyCode == 13) this.adicionarCurso();
	}

	adicionarCurso() {
		let inp: HTMLInputElement = <HTMLInputElement> document.querySelector('.ang-txt-curso');
		if(inp != null){
			if(inp.value != '') {
				this.listCursos.push(new Curso(inp.value, false));
				console.log(this.listCursos);
				inp.value = '';
			}
		}
	}
	  
	removerCurso(e){
		if(e.srcElement) {
			let el: HTMLAnchorElement = <HTMLAnchorElement> e.srcElement;
			let i: number = parseInt(el.getAttribute('data-index'));
			this.listCursos.splice(i,1);
		}
	}

	toggleFavorito(e){
		let el: HTMLAnchorElement = <HTMLAnchorElement> e.currentTarget;
		let i: number = parseInt(el.getAttribute('data-index'));
		this.listCursos[i].favorito = !this.listCursos[i].favorito;
	}
}