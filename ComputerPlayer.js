let Player = require("./Player.js");

class ComputerPlayer extends Player{
    constructor(name="Computer"){
        super(name, Move.generateRandomMoveType());
    }
}

module.exports = ComputerPlayer;