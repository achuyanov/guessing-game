class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.mid = 0;
    }


    //this method accepts min and max value of range of number to guess
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }


    //this method returns solution candidate (you make an assumption based on range and previous assumptions)
    guess() {
        this.mid = Math.ceil((this.max + this.min) / 2);
        return this.mid;
    }


    //this method is called if prev call of `guess()` returned number which is greater than answer
    lower() {
        this.max = this.mid;

    }


    //this method is called if prev call of `guess()` returned number which is lower than answer
    greater() {
        this.min = this.mid;
    }
}

module.exports = GuessingGame;