import { Article } from "./Article";
import { Cart } from "./Cart";

describe("Cart", () => {
  it("total vat price should be equal to the sum of all articles' VAT prices multiplied by the promotion", () => {
    const unitPrice1 = 100;
    const quantity1 = 2;
    const vat1 = 1.2;
    const article1 = new Article(unitPrice1, quantity1, vat1);

    const unitPrice2 = 50;
    const quantity2 = 3;
    const vat2 = 1.1;
    const article2 = new Article(unitPrice2, quantity2, vat2);

    const promotion = 0.9; // 10% off

    const cart = new Cart([article1, article2], promotion);

    const totalVatPrice =
      (article1.vatPrice() + article2.vatPrice()) * promotion;

    expect(cart.totalVatPrice()).toEqual(totalVatPrice);
  });
});
