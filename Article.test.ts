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

  it("should use default vat of 1 if not provided", () => {
    const unitPrice = 50;
    const quantity = 2;
    const article = new Article(unitPrice, quantity);
    expect(article.vatPrice()).toEqual(article.priceExcludingTax());
  });

  it("should throw an error if the vat is not between 1 and 1.2", () => {
    const unitPrice = 50;
    const quantity = 1;
    const vat = 1.3; // Invalid VAT
    expect(() => new Article(unitPrice, quantity, vat)).toThrow(
      "vat must be between 1 and 1.2"
    );
  });
});
