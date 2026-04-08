const Drink = require("./Drink.js");

class Softdrink extends Drink {
  constructor(name, type, price, onHand, sugar) {
    super(name, type, price, onHand);
    this.sugar = sugar;
  }
}

module.exports = Softdrink;
