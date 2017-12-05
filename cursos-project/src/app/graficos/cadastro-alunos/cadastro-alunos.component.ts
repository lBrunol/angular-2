import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../alunos/alunos.service';
import { Aluno } from '../../classes/Aluno';

@Component({
  selector: 'grafico-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.styl']
})
export class CadastroAlunosComponent implements OnInit {

  dados = new Array<Dados>();
  labels: string[] = [];
  type: string = 'horizontalBar';
  colors = [
    {
      backgroundColor: 'rgba(3, 155, 229, 0.75)'
    }
  ];
  options: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
            min: 0,
            stepSize: 1
          },
          stacked: true
      }],
      xAxes: [{
        ticks: {
          min: 0,
          stepSize: 1
        },
        stacked: false
    }]
    }
  };

  graficoReady:boolean = false;

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
    const dado = new Dados();
    dado.label = 'Alunos';
    dado.data = [];

    this.alunosService.getAlunos().subscribe((alunos: Aluno[]) => {

      this.dadosGrafico.forEach((item) => {
        alunos.forEach((alu) => {
          const splDataCadastro: string[] = alu.dataCadastro.split('/');
          const mesAtual: number = new Date(parseInt(splDataCadastro[2]), parseInt(splDataCadastro[1]) -1, parseInt(splDataCadastro[0])).getMonth() + 1;
          if(mesAtual === item.numMes){
            item.dados.push(alu);
          }
        });
      });

      this.dadosGrafico.forEach((item) => {
        if(item.dados.length > 0){
          this.labels.push(item.mes);
          dado.data.push(item.dados.length);
        }
      });
      this.dados.push(dado);
      this.graficoReady = true;
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
  data: Array<any>;
  label: string;
  backgroundColor?: Array<any>;
}