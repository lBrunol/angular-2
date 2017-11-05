import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  email: string;
  senha: string;
  erro: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  entrar(){
    if(this.email.trim() !== "" && this.senha.trim() !== ""){
      if(!this.loginService.logar(this.email, this.senha)){
        this.erro = 'Erro ao logar';
      }
    }
  }

}
