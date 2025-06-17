import { Article } from "./Article";

export class Cart {
  private articles: Article[];
  private promotion: number;

  constructor(articles: Article[] = [], promotion: number = 1) {
    if (promotion < 0.2 || promotion > 1) {
      throw new Error("Promotion must be between 0.2 and 1");
    }
    this.articles = articles;
    this.promotion = promotion;
  }

  totalVatPrice(): number {
    return (
      this.articles.reduce((total, article) => total + article.vatPrice(), 0) *
      this.promotion
    );
  }
}
