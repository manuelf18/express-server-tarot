const express = require('express');
const router = express.Router();
const cards = require('../models/cards');

function get_random_cards(){
    /* returns a random cards */
    var super_cards = [];
    var ix = [];
    for(i=0; i<=2; i++){
        do{
            index = Math.floor(Math.random() * cards.length);
        }while(ix.includes(index));
        super_cards.push({name: cards[index].name, meaning: cards[index].meaning[i]});
        ix.push(index);
    }
    return super_cards;
}

router.get('/', (req, res, next) => {
    card = get_random_cards();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(card));
});

module.exports = router;