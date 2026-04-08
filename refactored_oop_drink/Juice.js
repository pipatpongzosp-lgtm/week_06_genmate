const Drink = require("./Drink.js");

class Juice extends Drink {
  constructor(name, type, price, onhand, madefrom) {
    super(name, type, price, onhand);
    this.madefrom = madefrom;
  }
}

module.exports = Juice;
