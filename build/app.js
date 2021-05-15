"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
var player_1 = require("./player");
var Helpers = require("./utility");
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
    var player = new player_1.Player();
    player.name = Helpers.getInputValue('playername');
    var problemCount = Number(Helpers.getInputValue('problemCount'));
    var factor = Number(Helpers.getInputValue('factor'));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map