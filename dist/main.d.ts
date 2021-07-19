export declare class Elo {
    private _k;
    private _playerA;
    private _playerB;
    private _resultA;
    /**
     * @param _k The K factor.
     */
    constructor(_k?: number);
    /**
     * Get player A rating.
     */
    getA(): number;
    /**
     * Get player B rating.
     */
    getB(): number;
    /**
     * Get both players A and B rating in an array.
     */
    getResults(): [number, number];
    /**
     * Set player's A current score.
     */
    playerA(score: number): this;
    /**
     * Set player's B current score.
     */
    playerB(score: number): this;
    /**
     * Set player A as the game winner.
     */
    setWinnerA(): this;
    /**
     * Set player B as the game winner.
     */
    setWinnerB(): this;
    /**
     * Set the game result as a draw.
     */
    setDraw(): this;
    getExpected(a: number, b: number): number;
    /**
     * Calculate new ratings for players A and B.
     */
    calculate(): this;
}
