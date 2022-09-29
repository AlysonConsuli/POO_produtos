import Beer from "../src/classes/items/Beer.js";
import Cigar from "../src/classes/items/Cigar.js";
import Eletronics from "../src/classes/items/Eletronics.js";
import Water from "../src/classes/items/Water.js";
import Order from "./../src/classes/Order.js";

test("Deve criar um pedido e calcular o total", () => {
  const order = new Order();
  order.addItem(new Water("Crystal", 1));
  order.addItem(new Beer("Brahma", 6));
  order.addItem(new Cigar("Malboro", 10));
  order.addItem(new Eletronics("IPhone 13", 13000));
  const total = order.getTotal();
  expect(total).toBe(13017);
});

test("Deve criar um pedido e calcular os impostos", () => {
  const order = new Order();
  order.addItem(new Water("Crystal", 1));
  order.addItem(new Beer("Brahma", 6));
  order.addItem(new Cigar("Malboro", 10));
  order.addItem(new Eletronics("IPhone 13", 13000));
  const taxes = order.getTaxes();
  expect(taxes).toBe(3903.7);
});
