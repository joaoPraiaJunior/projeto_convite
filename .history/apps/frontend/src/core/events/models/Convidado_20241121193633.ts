export default interface Convidado {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    confirmado: boolean;
    possuiAcompanhantes: boolean;
    qtdeAcompanhantes: number;

}