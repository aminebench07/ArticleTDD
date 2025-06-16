export class Article {
  private unitPrice: number;
  private quantity: number;

  constructor(unitPrice: number, quantity: number) {
    if (unitPrice < 0) {
      throw new Error("Unit price must be a positive number");
    }
    this.unitPrice = unitPrice;
    this.quantity = quantity;
  }

  priceExcludingTax(): number {
    return this.unitPrice * this.quantity;
  }
}
