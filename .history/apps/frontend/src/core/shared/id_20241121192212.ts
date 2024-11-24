export default class Id {

    static novo(): string {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    private hash(): string {
        return Math.random().toString(36).substring(2, 15);
    }
}