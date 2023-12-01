const { pickOutRandomElements } = require("./utils");

const cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const cardTypes = ["S", "C", "D", "H"] // bích, chuồn, rô, cơ
const cardIds = {};
const cardList = [];
let index = 0;
cardTypes.forEach(type => {
    cardNumbers.forEach(number => {
        cardIds[number + type] = index;
        cardList[index] = number + type;
        index++;
    })
})

class CardUtils {
    constructor() {
        this.cardIds = Object.freeze(Object.create(null), cardIds);
        this.cardList = Object.freeze(cardList.slice());
    }

    pickCards(numCard) {
        return pickOutRandomElements(this.cardList, numCard);
    }
}

const cardUtils = new CardUtils();
module.exports = {
    cardUtils
}
