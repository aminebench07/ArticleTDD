import { Article } from "./Article";
describe("Article", () => {
  it("Excluding tax price should be equal to unitprice*quantity ", () => {
    const unitPrice = 100;
    const quantity = 2;
    const article = new Article(unitPrice, quantity);
    expect(article.priceExcludingTax()).toEqual(unitPrice * quantity);
  });

  it("Should show an error if a price is negative", () => {
    const unitPrice = -100;
    const quantity = 2;
    expect(() => new Article(unitPrice, quantity)).toThrow(
      "Unit price must be a positive number"
    );
  });

  it("vatPrice must be equal to excludingTaxPrice * vat", () => {
    const vat = 1.2;
    const unitPrice = 50;
    const quantity = 3;
    const article = new Article(unitPrice, quantity, vat);
    const excludingTaxPrice = article.priceExcludingTax();
    expect(article.vatPrice()).toEqual(excludingTaxPrice * vat);
  });
});
