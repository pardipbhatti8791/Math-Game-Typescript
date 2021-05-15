import { ScoreBoard } from "./scoreBoard";
import {Player} from "./player";
import { getInputValue } from "./utility";
import { Result } from "./result";

export class Game {
    private scoreBoard: ScoreBoard = new ScoreBoard();

    constructor(public player: Player, public  problemCount: number, public factor: number) {}

    displayGame(): void {
        let gameForm: string = ''
        for(let i = 1; i<= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' X ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div> '
            gameForm += '</div>'
        }

        const gameElement: HTMLElement = <HTMLElement>document.getElementById('game');
        gameElement.innerHTML = gameForm

        document.getElementById('calculate')!.removeAttribute('disabled')
    }

    calculateScore() : void {
        let score: number = 0;

        // loop through the text boxes and calculate the number that are correct
        for(let i =1; i <= this.problemCount; i++) {
            const answer: number = Number(getInputValue('answer' + i));
            if(i * this.factor === answer) {
                score++
            }
        }

        // create a new result object to pass to the scoreboard
        const result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        }

        // add the result and update the scoreboard
        this.scoreBoard.addResult(result);
        this.scoreBoard.updateScroeBoard();

        // disable the calculate score button
        document.getElementById('calculate')!.setAttribute('disabled', 'true');

    }
}
