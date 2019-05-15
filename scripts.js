const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if(lockBoard)return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    // hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch(){
    // if(firstCard.dataset.framework === secondCard.data.framework){
    //     disableCards();
    //     return;
    // }
    // unflipCards();
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        // lockBoard = false;
        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
// The firstCard and secondCard variables need to be reset after each round, so let’s extract that to a new method resetBoard().Let’s place the hasFlippedCard = false; and lockBoard = false there too.The es6 destructuring assignment[var1, var2] = ['value1', 'value2'], allows us to keep the code super short:

cards.forEach(card => card.addEventListener('click', flipCard));