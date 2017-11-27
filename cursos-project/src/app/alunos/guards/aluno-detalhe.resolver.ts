import { Resolve } from "@angular/router";
import { AlunosService } from "../alunos.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Aluno } from "../../classes/Aluno";


@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno>{

    constructor(private alunosService: AlunosService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Aluno>{
        
        let id = route.params['id'];

        return this.alunosService.getAluno(id);
    }
}