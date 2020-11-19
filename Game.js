let Player = require('./Player.js');
let Move = require('./Move.js');

class Game {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }

    playTheGame(){
        console.log('Playing a game of Roshambo against the computer.');
        console.log(this.player1.name+' plays ' + this.player1.move.moveAsString() + '!');
        console.log(this.player2.name+' plays ' + this.player2.move.moveAsString() + '!')
        
        let winner = Move.determineWinner(this.player1.move, this.player2.move);
        if (winner > 0){
            console.log(this.player1.name + " won!");
        }else if (winner < 0){
            console.log(this.player2.name + " won!");
        }else{
            console.log(this.player1.name +" and "+this.player2.name+" tied!");
        }
    }
}


module.exports=Game;