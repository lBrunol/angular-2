import { InMemoryDbService } from "angular-in-memory-web-api";
import { Curso } from "./classes/Curso";
import { Aluno } from "./classes/Aluno";

export class InMemoryDataService implements InMemoryDbService {

    createDb(){
        const cursos =[
            new Curso(1, 'Java básico', '4 meses', 600),
            new Curso(2, 'Java intermediário', '3 meses', 800),
            new Curso(3, 'Desenvolvimento front-end', '6 meses', 1200),
            new Curso(4, 'Desenvolvimento javascript', '3 meses', 400),
            new Curso(5, 'Angular 2', '4 meses', 1000),
            new Curso(6, 'React', '4 meses', 1000),
            new Curso(7, 'React Native', '2 meses', 600),
            new Curso(8, 'Vue.js com Express', '4 meses', 1200),
            new Curso(9, 'ASP.NET Core', '2 meses', 1800),
            new Curso(10, 'Testes com Javascript', '1 meses', 600),
            new Curso(11, 'Xamarin básico', '2 meses', 800),
            new Curso(12, 'Laravel', '6 meses', 1200),
            new Curso(13, 'Node.js', '4 meses', 600),
            new Curso(14, 'Desenvolvimento SQL com SQL Server', '4 meses', 1200),
            new Curso(15, 'Desenvolvimento iOS com Swift', '6 meses', 2000)
        ];

        const alunos = [
            new Aluno(1, 'Bruno', 'Alves', 'Masculino', '25/10/1995', '01/02/2017'),
            new Aluno(2, 'Natali', 'Araújo', 'Feminino', '10/09/1994', '15/06/2017'),
            new Aluno(3, 'Camila', 'Soares', 'Feminino', '15/09/1990', '01/05/2017'),
            new Aluno(4, 'Marcos', 'Moreira', 'Masculino', '15/10/1993', '15/06/2017'),
            new Aluno(5, 'Janaina', 'Marcone', 'Feminino', '15/08/1997', '15/02/2017'),
            new Aluno(6, 'Isaquias', 'Santos', 'Masculino', '10/02/1992', '01/03/2017'),
            new Aluno(7, 'Mario', 'Carlos', 'Masculino', '10/03/1993', '01/02/2017'),
            new Aluno(8, 'Carla', 'Pereira', 'Feminino', '15/09/1990', '02/05/2017'),
            new Aluno(9, 'Mariana', 'Vasconselos', 'Feminino', '15/01/1990', '01/02/2017'),
            new Aluno(10, 'Juliana', 'Albuquerque', 'Feminino', '15/06/1993', '06/02/2017'),
            new Aluno(11, 'Marcos', 'Santos', 'Masculino', '23/06/1992', '01/03/2017'),
        ]
        return {cursos, alunos};
    }

}