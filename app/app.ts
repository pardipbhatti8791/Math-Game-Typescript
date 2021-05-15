import { Game } from "./game";
import { Player } from "./player";
import * as Helpers from "./utility";

let newGame: Game

document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    player.name = Helpers.getInputValue('playername')

    const problemCount: number = Number(Helpers.getInputValue('problemCount'))
    const factor: number = Number(Helpers.getInputValue('factor'))

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame()
});

document.getElementById('calculate')!.addEventListener('click',  () => {
    newGame.calculateScore()
})
