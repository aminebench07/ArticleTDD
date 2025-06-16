import { Article } from "./Article";

test("Article's excluding tax price should be equal to unitprice*quantity ", () => {
  const unitPrice = 100;
  const quantity = 2;
  const article = new Article(unitPrice, quantity);
  expect(article.priceExcludingTax()).toEqual(unitPrice * quantity);
});

test("Should show an error if a price is negative", () => {
  const unitPrice = -100;
  const quantity = 2;
  expect(() => new Article(unitPrice, quantity)).toThrow(
    "Unit price must be a positive number"
  );
});
