enum GameResult {
    Lose = 0,
    Draw = 0.5,
    Won = 1
}

export class Elo {
    private _playerA = 0;
    private _playerB = 0;

    private _resultA = GameResult.Won;

    /**
     * @param _k The K factor.
     */
    constructor(private _k = 32) { }

    /**
     * Get player A rating.
     */
    getA() {
        return this._playerA;
    }

    /**
     * Get player B rating.
     */
    getB() {
        return this._playerB;
    }

    /**
     * Get both players A and B rating in an array.
     */
    getResults() {
        return [this.getA(), this.getB()] as [number, number];
    }

    /**
     * Set player's A current score.
     */
    playerA(score: number) {
        this._playerA = score;

        return this;
    }

    /**
     * Set player's B current score.
     */
    playerB(score: number) {
        this._playerB = score;

        return this;
    }

    /**
     * Set player A as the game winner.
     */
    setWinnerA() {
        this._resultA = GameResult.Won;

        return this;
    }

    /**
     * Set player B as the game winner.
     */
    setWinnerB() {
        this._resultA = GameResult.Lose;

        return this;
    }

    /**
     * Set the game result as a draw.
     */
    setDraw() {
        this._resultA = GameResult.Draw;

        return this;
    }

    getExpected(a: number, b: number) {
        return 1 / (1 + Math.pow(10, ((b - a) / 400)));
    }

    /**
     * Calculate new ratings for players A and B.
     */
    calculate() {
        const score = Math.round(this._k * (this._resultA - this.getExpected(this._playerA, this._playerB)));

        this._playerA += score;
        this._playerB -= score;

        return this;
    }
}