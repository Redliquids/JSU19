// https://avancera.app/#/courses/bf07b4d8-2a0e-4f11-a536-bf4bd8dacd21/ea808299-aaf8-456c-bd51-e7cc8d8a8b0a
//const greting = greet('Jon');
//sum([1, 2, 3]);
//average([1, 2, 3]);
const suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS'];
var deck = createDeck();
var hand;

function score(deck) {
    for(i = 0; i < deck.length; i++) {
        switch(deck[i].value) {
            case 1: val == 11;
            brake;
            case 11: val == 10;
            brake;
            case 12: val == 10;
            brake;
            case 13: val == 10;
            brake;
            default: val == deck[i].value;
            break;
        }
    }
    return val;
}

function shuffle (deck) {
    var currentIndex = deck.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = temporaryValue;
    }
    return undefined;
}

function draw(deck) {
    returnVal = deck[0];
    deck.shift();
    return returnVal;
}

function createDeck() {
    return newDeck = deck();
}

function deck() {
    var deck  = [];
    for(s = 0; s <= 3; s++){
        for (n = 1; n <= 13; n++) {
            deck.push(card(n, suits[s]));
        }
    }
    return deck;
}

function card(Number, String) {
    var card = {
        suit: String,
        value: Number
    }
    return card;
}

function prettyCard (card) {
    //card.suit.toLowerCase();
    switch(card.suit) {
        case 'HEARTS': 
            card.suit = '♥';
            break;
        case 'SPADES': 
            card.suit = '♠';
            break;
        case 'DIAMONDS': 
            card.suit = '♦';
            break;
        case 'CLUBS': 
            card.suit = '♣';
            break;
    }
    switch(card.value) {
        case 1:
            card.value = 'A';
            break;
        case 10:
            card.value = 'T';
            break;
        case 11:
            card.value = 'J';
            break;
        case 12:
            card.value = 'Q';
            break;
        case 13:
            card.value = 'K';
            break;
    }
    return card.value + card.suit;
}


function average (list) {
    var average = 0;
    for(i = 0; i < list.length; i++){
        average += list[i];
    }
    if (average == 0)
        return null;
     return average  / list.length;
}

function sum(values) {
// var reply; returns 'NaN' So i have to set it to 0.
    var reply = 0;
    for(i = 0; i < values.length; i++){
        reply = reply + values[i]
    }
    return reply;
};

function greet(name) {
    return "Välkommen till ett Blackjack-spel, " + name + '!';
};