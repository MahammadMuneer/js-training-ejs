"use strict";
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        let suits = ["clubs", "diamonds", "hearts", "spades"];
        let ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }

    shuffleDeck() {
        let random, temp;
        for (let i = 0; i < this.cards.length; i++) {
            random = Math.floor(Math.random() * (this.cards.length - i) + i);
            temp = this.cards[i];
            this.cards[i] = this.cards[random];
            this.cards[random] = temp;
        }
    }
}

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }

    takeTurn() {
        for (let i = 0; i < this.playerCards.length; i++) {
            if (this.playerCards[i].suit === game.topCard.suit ||
                this.playerCards[i].rank === game.topCard.rank ||
                this.playerCards[i].value === 8) {
    
                game.discardPile = game.discardPile.push(this.playerCards[i]);
                game.topCard = game.playerCards[i];
                this.playerCards.pop();
            } else {
                for (let j = 0; j < game.drawPile.length; j++) {
                    if (game.drawPile[j].suit === game.topCard.suit ||
                        game.drawPile[j].rank === game.topCard.rank ||
                        game.drawPile[j].rank === 8) {
    
                        game.discardPile = game.discardPile.push(game.drawPile[j]);
                        game.topCard = game.drawPile[j];
                        game.drawPile = game.drawPile.slice(0, j);
                    } else {
                        this.playerCards = this.playerCards.push(game.drawPile[j]);
                        game.drawPile.pop();
                    }
                }
            }
            if (game.drawPile === 0) {
                game.drawPile = game.discardPile.slice(0, game.discardPile.length - 1);
                game.drawPile = game.drawPile.shuffleDeck();
                game.discardPile = [];
            }
        }
    }

    displayScore() {
        let score = 0;
        for (let i = 0; i < this.playerCards.length; i++) {
            if (this.playerCards[i].value === 8) {
                score += 20;
            } else if (this.playerCards[i].value === 10 || this.playerCards[i].value === 1 ||
                this.playerCards[i].value === 11 || this.playerCards[i].value === 12 ||
                this.playerCards[i].value === 13) {
                score += 10;
            } else {
                score += this.playerCards[i].value;
            }
        }
        console.log(`Penalty point for '${this.playerName}' = ` + score);
    }

    nextplayer(player) {
        return player === this.one ? this.two : this.one;
    }
}

class Eights {
    constructor() {
        this.one = new Player("Player1");
        this.two = new Player("Player2");
        let deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();
        this.players = [];
        this.one.playerCards = deck.cards.slice(0, 5);
        this.two.playerCards = deck.cards.slice(5, 10);
        this.discardPile = deck.cards[10];
        this.discardPile = deck.cards.slice(11);
        this.topCard = deck.cards[10];
    }

    isDone() {
        return this.one.playerCards === 0 || this.two.playerCards === 0;
    }

    playGame() {
        let currentPlayer = this.one;

        while (!this.isDone()) {
            console.log("The Top card is :");
            console.log(this.topCard);
            currentPlayer.takeTurn();
            currentPlayer.nextplayer();
        }

        this.one.displayScore();
        this.two.displayScore();
    }

}
function main() {
    const game = new Eights();
    game.playGame();
}

main();




