class Move {
    constructor(type){
        this.type = type
    }
    static rock = 0;
    static scissors = 1;
    static paper = 2;
    static other = 3;

    static generateRandomMoveType(){
        return Math.trunc(Math.random()*3);
    }

    static getMoveTypeFromString(string){
        if (string==="rock") return Move.rock;
        if (string==="scissors") return Move.scissors;
        if (string==="paper") return Move.paper;
        return Move.other;
    }

    static determineWinner(moveA, moveB){
        if (moveA.type===moveB.type){
            return "tie!"
        }
        
        if (moveA.type===Move.other) return "b wins!"
        if (moveB.type===Move.other) return "a wins!"

        if (moveA.type===Move.rock && moveB.type===Move.scissors){
            return "a wins!"
        }
        if (moveA.type===Move.scissors && moveB.type===Move.paper){
            return "a wins!"
        }
        if (moveA.type===Move.paper && moveB.type===Move.rock){
            return "a wins!"
        }
        return "b wins!"
    }
}

module.exports = Move;