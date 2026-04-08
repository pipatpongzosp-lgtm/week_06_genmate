const Drink = require("./Drink.js");

class Beer extends Drink {
  constructor(name, type, price, onHand, degree) {
    super(name, type, price, onHand);
    this.degree = degree;
  }
}

module.exports = Beer;
