export default interface Evento {
    id: string;
    alias: string;
    senha: string;
    nome: string;
    data: Date;
    local: string;
    descricao: string;
    imagem: string;
    imageBackground: string;
    publicoEsperado: number;
    convidados: Convidado[];
}
