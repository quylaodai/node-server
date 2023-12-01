
const { cardUtils } = require("../utils/CardUtils");

class ThirteenSlot {

    constructor() {
        console.log("ThirteenSlot");
    }

    pickCards() {
        const cards = cardUtils.pickCards(13);
        const payline = this.calculatePayLine(cards);
    }

    calculatePayLine(cards) {
        console.error(cards);
    }
}
module.exports = {
    ThirteenSlot
}
