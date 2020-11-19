class Move {
    constructor(type){
        this.type = type
    }

    moveAsString(){
        return Move.RPS_MOVES[this.type]; 
    }

    static rock = 0;
    static paper = 1;
    static scissors = 2;
    static other = 3;

    static generateRandomMoveType(){
        return Math.trunc(Math.random()*3);
    }

    static RPS_MOVES = ["Rock", "Paper", "Scissors", "Other"];
    static getMoveTypeFromString(string){
        if (string==="rock") return Move.rock;
        if (string==="scissors") return Move.scissors;
        if (string==="paper") return Move.paper;
        return Move.other;
    }

    //will return 0 if tie
    //will return >0 if A wins
    //will return <0 if B wins
    static determineWinner(moveA, moveB){
        if (moveA.type===moveB.type){
            return 0;
        }

        if (moveA.type===Move.other) return -1;
        if (moveB.type===Move.other) return 1;

        if (moveA.type===Move.rock && moveB.type===Move.scissors){
            return 1;
        }
        if (moveA.type===Move.scissors && moveB.type===Move.paper){
            return 1;
        }
        if (moveA.type===Move.paper && moveB.type===Move.rock){
            return 1;
        }
        return -1;
    }
}

module.exports = Move;