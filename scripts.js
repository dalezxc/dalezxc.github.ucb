// Random card value
function random() {
    let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
    let randomindex = Math.floor(Math.random() * cards.length);
    return cards[randomindex];
}

// start game
function startgame() {
    let playerhand = random() + random();
    let dealerhand = random() + random();
    document.getElementById('playerhand').textContent = playerhand;
    document.getElementById('dealerhand').textContent = dealerhand;
    document.getElementById('start').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

// Winner
function winner(playerhand, dealerhand) {
    if (playerhand > 21) {
        return 'Player Lost!';
    } else if (dealerhand > 21) {
        return 'Player Won!';
    } else if (playerhand > dealerhand) {
        return 'Player Won!';
    } else if (playerhand < dealerhand) {
        return 'Player Lost!';
    } else {
        return "It's a tie!";
    }
}

// Hit
function hit() {
    let playerhand = parseInt(document.getElementById('playerhand').textContent);
    let newcard = random();
    playerhand += newcard;
    document.getElementById('playerhand').textContent = playerhand;

    if (playerhand > 21) {
        document.getElementById('winner').textContent = winner(playerhand, parseInt(document.getElementById('dealerhand').textContent));
        end();
    }
}

// Stand
function stand() {
    let playerhand = parseInt(document.getElementById('playerhand').textContent);
    let dealerhand = parseInt(document.getElementById('dealerhand').textContent);

    while (dealerhand < 17) {
        let newcard = random();
        dealerhand += newcard;
        document.getElementById('dealerhand').textContent = dealerhand;
    }

    document.getElementById('winner').textContent = winner(playerhand, dealerhand);
    end();
}

// Play again button inig human sa dula
function end() {
    document.getElementById('play-again').style.display = 'block';
}

// loop reset 
function reset() {
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('start').style.display = 'block';
    document.getElementById('game').style.display = 'none';
    document.getElementById('playerhand').textContent = '';
    document.getElementById('dealerhand').textContent = '';
    document.getElementById('winner').textContent = '';
}