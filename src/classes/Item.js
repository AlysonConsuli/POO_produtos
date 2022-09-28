export default class Item {
  constructor(category, description, price) {
    this.category = category;
    this.description = description;
    this.price = price;
    this.tax = 0;

    this.setup();
  }

  setup() {
    if (this.category === "Beer") {
      this.tax = 0.2;
    }
    if (this.category === "Cigar") {
      this.tax = 0.25;
    }
    if (this.category === "Eletronics") {
      this.tax = 0.3;
    }
  }
}
