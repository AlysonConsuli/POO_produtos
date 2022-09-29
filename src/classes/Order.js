import TaxItem from "./TaxItem.js";

export default class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotal() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price;
    });
    return total;
  }

  getTaxes() {
    let total = 0;
    this.items.forEach((item) => {
      const taxItem = new TaxItem(item.category, item.description, item.price);
      total += taxItem.calculateTax(item.tax);
    });
    return total;
  }
}
