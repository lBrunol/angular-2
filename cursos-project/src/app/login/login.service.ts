import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  logado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  logar(email: string, senha: string){
    if(email == 'br@gmail.com' && senha == '123'){
      this.logado = true;
      this.router.navigate(['home']);
      this.mostrarMenuEmitter.emit(true);
      return true;
    } else {
      this.logado = false;
      this.mostrarMenuEmitter.emit(false);
      
      return false;
    }
  }

  estaLogado(){
    return this.logado;
  }
  
}