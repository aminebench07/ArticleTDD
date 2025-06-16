import { Article } from "./Article";

test("Article's excluding tax price should be equal to unitprice*quantity ", () => {
  const unitPrice = 100;
  const quantity = 2;
  const article = new Article(unitPrice, quantity);
  expect(article.priceExcludingTax()).toEqual(unitPrice * quantity);
});
