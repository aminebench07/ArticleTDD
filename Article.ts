export class Article {
  private unitPrice: number;
  private quantity: number;

  constructor(unitPrice: number, quantity: number) {
    this.unitPrice = unitPrice;
    this.quantity = quantity;
  }

  priceExcludingTax(): number {
    return this.unitPrice * this.quantity;
  }

  
}
