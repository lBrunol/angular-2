import { InMemoryDbService } from "angular-in-memory-web-api";
import { Curso } from "./classes/Curso";

export class InMemoryDataService implements InMemoryDbService {

    createDb(){
        const cursos = [
            new Curso(1, 'Java básico', '4 meses', 600),
            new Curso(2, 'Java intermediário', '3 meses', 800),
            new Curso(3, 'Herói do front-end', '6 meses', 1200),
            new Curso(4, 'Herói do javascript', '3 meses', 400)
        ];
        return {cursos};
    }

}