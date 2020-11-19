let Move = require("./Move.js");
let Player = require("./Player.js");
let ComputerPlayer = require("./ComputerPlayer.js");
let Game = require('./Game.js');

let playerMoveString = getMoveFromString(String(process.argv[2]));
let playerMoveType = Move.getMoveTypeFromString(playerMoveString);

let rpsGame = new Game(new Player("Player", playerMoveType), new ComputerPlayer());

rpsGame.playTheGame();

function getMoveFromString(input){ 
    input = input.toLowerCase().trim();
    if (input.substr(0, 7)==="--move="){
        return input.substr(7);
    }
    return null;
}