export class Aluno {
    constructor(
        public id: number, 
        public nome: string, 
        public sobrenome: string, 
        public sexo: string, 
        public dataNascimento: string,
        public dataCadastro?: string,
    ){

    }
}