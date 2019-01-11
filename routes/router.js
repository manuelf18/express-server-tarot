const express = require('express');
const router = express.Router();
const cards = require('../models/cards');

function getRandomCards(){
    /* returns random cards */
    let index;
    let selectedCards = [];
    let indexIncluded = [];
    for(i=0; i<=2; i++){
        do{
            index = Math.floor(Math.random() * cards.length);
        }while(indexIncluded.includes(index));
        selectedCards.push({name: cards[index].name, meaning: cards[index].meaning[i]});
        indexIncluded.push(index);
    }
    return selectedCards;
}

router.get('/', (req, res, next) => {
    let cardList = getRandomCards();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(cardList));
});

module.exports = router;