import { Resolve } from "@angular/router";
import { Curso, CursosService } from "../cursos.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";


@Injectable()
export class CursoDetalheResolver implements Resolve<Curso>{

    constructor(private cursosService: CursosService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Curso>{
        
        let id = route.params['id'];

        return this.cursosService.getCurso(id);
    }
}