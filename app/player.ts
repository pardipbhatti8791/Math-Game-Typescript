import {Person} from "./person";

export class Player implements Person {
    name: string;
    age: number;
    highScore: number;

    formatName(): string {
        return this.name.toUpperCase()
    }
}
