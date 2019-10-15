const suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS'];
var deck = createDeck();
var hand;




// En klickbar knapp 
// https://avancera.app/#/courses/bf07b4d8-2a0e-4f11-a536-bf4bd8dacd21/ea178e64-19cd-4269-a3d2-7fe31d64d560


function btnClick () {
    alert('Välkommen till ett Blackjack-spel!');
}

document.addEventListener('DOMContentLoaded', function() {
    document.onkeydown = checkKey;

    var stake = 1;



    var form = document.createElement("form");
    form.setAttribute('id', 'form');
    document.body.appendChild(form);


    // Skapa ett textfält med id-attributet satt till user-name
    var userName = document.createElement("input");

    document.body.appendChild(userName);
    userName.setAttribute('id', 'user-name');
    userName.placeholder = "Enter your username";

    userName.preventDefault;
    // en knapp med id-attributet satt till join
    var join = document.createElement("submit");

    document.body.appendChild(join);
    join.setAttribute('id', 'join');
    join.innerHTML = "Join";
    join.setAttribute('method', 'joinGame()');
    join.setAttribute('value', 'submit');
    join.setAttribute('type', 'submit');


    join.setAttribute('onclick', 'joinGame()');
    // ett div-element med id-värdet message
    var message = document.createElement("div")

    document.body.appendChild(message);
    message.setAttribute('id', 'message');


    form.appendChild(userName);
    form.appendChild(join);
    form.appendChild(message);



    var input = document.createElement("input");
    var currentBet = document.createElement("div");
    var raiseBet = document.createElement("input")
    var decreaseBet = document.createElement("input")






    document.body.appendChild(currentBet);
    currentBet.setAttribute('id', 'bet-size');
    currentBet.setAttribute('onclick', 'raiseStake()');
    document.querySelector('div').innerHTML = stake;


    
    raiseBet.value = "Raise Bet";
    document.body.appendChild(raiseBet);
    raiseBet.id = "increase";
    document.getElementById ('increase').type = 'BUTTON';
    raiseBet.setAttribute('onclick', 'raiseStake()');


    decreaseBet.value = "Lower Bet";
    document.body.appendChild(decreaseBet);
    decreaseBet.id = "decrease";
    document.getElementById ('decrease').type = 'BUTTON';
    decreaseBet.setAttribute('onclick', 'lowerBet()');
    decreaseBet.disabled = true;

    input.value = "Welcome";
    document.body.appendChild(input);
    input.id = "welcome";
    document.getElementById ('welcome').type = 'BUTTON';
    input.setAttribute('onclick', 'btnClick()');


    
    // Sätt ett attribut 
    // https://avancera.app/#/courses/bf07b4d8-2a0e-4f11-a536-bf4bd8dacd21/b853df0d-1655-4d9d-bc10-d6f93198d8f5
    // line 21 only works if we wait until dom is loaded.
    document.getElementsByTagName('ol')[0].setAttribute('type', 'I');

    //var ol = document.getElementsByTagName('ol')
    //ol[0].setAttribute('type', 'I');


    var items = document.getElementsByTagName('li');
    var nodes = document.querySelectorAll('title');
    document.title = 'Blackjack';
    
    // Röd text 
    // https://avancera.app/#/courses/bf07b4d8-2a0e-4f11-a536-bf4bd8dacd21/0960f730-15c2-41bd-9409-cd3dddbc348a
    var li = document.getElementsByTagName('li');
    li[2].style.color = "#c00";

    // Understruken text 
    // https://avancera.app/#/courses/bf07b4d8-2a0e-4f11-a536-bf4bd8dacd21/3a7825aa-8742-4c17-ae28-b8d55cc0bd19
    for(i = 0; i < li.length; i++) {
        li[i].style.textDecoration = 'underline';
    }
    
    // Infoga element 
    // https://avancera.app/#/courses/bf07b4d8-2a0e-4f11-a536-bf4bd8dacd21/7674383e-e4b5-499c-9002-1cb312f2453e
    for(i = 0; i < li.length; i++) {
        li[i].innerHTML += '<span class="credits"> 100 credits</span>';
    }

    // Lägg till ett element, på slutet 
    // https://avancera.app/#/courses/bf07b4d8-2a0e-4f11-a536-bf4bd8dacd21/ec3f5e46-be92-4a1f-8103-ccbcfd90cb57
    var addLi = document.createElement('li')
    var addText = document.createTextNode('Vice')
    addLi.appendChild(addText);
    document.querySelector('ol').appendChild(addLi)

    

    
    function joinGame(event) {
        event.preventDefault();
        var userName = document.getElementById('user-name').value;
        document.getElementById("message").innerHTML = "Hej " + userName +'!';
    }

    function checkKey(e) {
        e = e || window.event;
        if(e.keyCode == '38'){
            raiseStake();
        }
        if(e.keyCode == '40'){
            lowerBet();
        }
    }

    function lowerBet() {
        if(!(stake <= 1)){
            stake --
            document.querySelector('div').innerHTML = stake;
            checkBet();
        }
    }

    function raiseStake () {
        stake ++
        document.querySelector('div').innerHTML = stake;
        checkBet();
    }

    function checkBet() {
        if(stake <= 1) {
            decreaseBet.disabled = true;
        } else {
            decreaseBet.disabled = false;
        }
    }
    
    form.addEventListener("submit", joinGame);

    console.log('Function ran when DOMContentLoaded')
}, false);





const a2 = () => 0
const a1 = () => {
    alert(); 
    return true
}

function call(alert) {
    alert(alert);
}

function score(deck) {
    var val = 0;
    for(i = 0; i < deck.length; i++) {
        console.log('deck[i].value: ' + deck[i].value)
        switch(deck[i].value) {
            case 1: 
            if(val <= 10) {
                val += 11;
            } else {
                val += 1;
            }
            break;
            case 11: val += 10;
            break;
            case 12: val += 10;
            break;
            case 13: val += 10;
            break;
            case 0: val += 10;
            break;
            default: val += deck[i].value;
            break;
        }
    }
    console.log(val);
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
        for (n = 0; n <= 12; n++) {
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