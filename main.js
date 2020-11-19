let Move = require("./Move.js");
let Player = require("./Player.js");
let ComputerPlayer = require("./ComputerPlayer.js");

console.log('Playing a game of Roshambo against the computer.')
let playerMoveString = getMoveFromString(process.argv[2]);
let playerMoveType = Move.getMoveTypeFromString(playerMoveString);
let player = new Player("Player", playerMoveType);
let computerPlayer = new ComputerPlayer();

console.log('Player plays ' + playerMoveString + '!');


function getMoveFromString(input){ 
    input = input.toLowerCase().trim();
    if (input.substr(0, 7)==="--move="){
        return input.substr(7);
    }
    return null;
}

