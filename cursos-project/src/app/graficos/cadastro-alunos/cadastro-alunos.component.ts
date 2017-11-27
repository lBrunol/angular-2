import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../alunos/alunos.service';
import { Aluno } from '../../classes/Aluno';

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.styl']
})
export class CadastroAlunosComponent implements OnInit {

  dados: string[];
  labels: string[];
  type: string;
  options: string[];

  meses: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  constructor(private alunosService: AlunosService) { 
    
  }

  ngOnInit() {
    this.alunosService.getAlunos().subscribe((alunos: Aluno[]) => {
      let dates: string[];
      let alu: Aluno[];

      alunos.forEach((item, i) => {
        const splDataCadastro = item.dataCadastro.split('/');
        item.dataCadastro = splDataCadastro[2] + '-' + splDataCadastro[1] + '-' + splDataCadastro[0];
        
        alu.push(item);

        if(!dates.includes(item.dataCadastro)){
          dates.push(item.dataCadastro);
        }
      });

      dates.forEach((item, i) => {
        const date = new Date(item);
        const mes = date.getMonth();
        const ano = date.getFullYear();
        this.labels.push(this.meses[mes] + ' ' + ano);
      });

    });
  }

}
