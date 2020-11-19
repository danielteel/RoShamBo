let Player = require("./Player.js");
let Move = require('./Move.js');

class ComputerPlayer extends Player{
    constructor(name="Computer"){
        super(name, Move.generateRandomMoveType());
    }
}

module.exports = ComputerPlayer;