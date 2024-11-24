export default class Senha {
    static criar(tamanho: number = 8 ): string {
        return Math.random().toString(36).slice(-8);
    }
}