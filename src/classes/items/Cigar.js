import TaxItem from "../TaxItem.js";

export default class Cigar extends TaxItem {
  constructor(description, price) {
    super(description, price);
    this.tax = 0;
  }

  getTax() {
    return (this.tax = 0.25);
  }
}
