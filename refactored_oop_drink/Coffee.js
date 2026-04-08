const Drink = require("./Drink.js");

class Coffee extends Drink {
  constructor(name, type, price, onHand, bean) {
    super(name, type, price, onHand);
    this.bean = bean;
  }
}

module.exports = Coffee;
