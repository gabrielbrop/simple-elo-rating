# Simple Elo Rating

Small, easy-to-understand module for implementing Elo rating.

## Installation

```bash
npm install simple-elo-rating
```

## Usage

```typescript
import { Elo } from "simple-elo-rating";

const [newScoreA, newScoreB] = new Elo()
	.playerA(1500)
	.playerB(1300)
	.setWinnerA()
	.calculate()
	.getResults();
```