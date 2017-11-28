import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../alunos/alunos.service';
import { Aluno } from '../../classes/Aluno';

@Component({
  selector: 'grafico-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.styl']
})
export class CadastroAlunosComponent implements OnInit {

  dados = new Dados();
  labels: string[] = [];
  type: string = 'bar';
  options: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  dadosGrafico: DadosGrafico[] = [
    new DadosGrafico('Janeiro', 1, []),
    new DadosGrafico('Fevereiro', 2, []),
    new DadosGrafico('Março', 3, []),
    new DadosGrafico('Abril', 4, []),
    new DadosGrafico('Maio', 5, []),
    new DadosGrafico('Junho', 6, []),
    new DadosGrafico('Julho', 7, []),
    new DadosGrafico('Agosto', 8, []),
    new DadosGrafico('Setembro', 9, []),
    new DadosGrafico('Outubro', 10, []),
    new DadosGrafico('Novembro', 11, []),
    new DadosGrafico('Dezembro', 12, []),    
  ];

  constructor(private alunosService: AlunosService) {}

  ngOnInit() {    
    this.dados.label = 'Alunos';
    this.dados.dados = [];
    
    this.alunosService.getAlunos().subscribe((alunos: Aluno[]) => {

      this.dadosGrafico.forEach((item, i) => {
        alunos.forEach((alu, j) => {
          const splDataCadastro: string[] = alu.dataCadastro.split('/');
          const mesAtual: number = new Date(parseInt(splDataCadastro[2]), parseInt(splDataCadastro[1]) -1, parseInt(splDataCadastro[0])).getMonth() + 1;
          console.log(item);
          console.log(alu);
          if(mesAtual === item.numMes){
            item.dados.push(alu);
          }
        });
      });

      this.dadosGrafico.forEach((item, i) => {
        if(item.dados.length > 0){
          this.labels.push(item.mes);
          this.dados.dados.push(item.dados.length.toString());
        }
      });
      
    });
  }
}

export class DadosGrafico {
  mes: string;
  numMes: number; 
  dados?: Aluno[];
  constructor(mes: string, numMes: number, dados?: Aluno[]){
    this.mes = mes;
    this.numMes = numMes;
    this.dados = dados;
  }
}

export class Dados {
  dados: Array<any>;
  label: string;
}