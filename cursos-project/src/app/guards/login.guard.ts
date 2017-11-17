import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(state: ActivatedRouteSnapshot, route: RouterStateSnapshot) : Observable<boolean> | boolean {
    // if(this.loginService.estaLogado()){
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return true;
    // }
    return true;
  }
}