import { Injectable } from "@angular/core";
import { CanActivateChild } from "@angular/router/src/interfaces";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";
import { Observable } from "rxjs/Observable";


@Injectable()
export class CursosGuard implements CanActivateChild{

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {

    // if(state.url.includes('detalhe')){
    //   alert('sem permissão');
    //   return true;
    // }

    return Observable.of(true);
  }  
}