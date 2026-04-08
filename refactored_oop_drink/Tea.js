const Drink = require("./Drink.js");

class Tea extends Drink {
  constructor(name, type, price, onHand, fromCountry) {
    super(name, type, price, onHand);
    this.fromCountry = fromCountry;
  }

  teaFrom() {
    console.log(`This ${this.name} is from ${this.fromCountry}.`);
  }
}

module.exports = Tea;
