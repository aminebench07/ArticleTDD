export class Article {
  private unitPrice: number;
  private quantity: number;
  private vat: number;
  constructor(unitPrice: number, quantity: number, vat: number = 1) {
    if (unitPrice < 0) {
      throw new Error("Unit price must be a positive number");
    }
    if (vat < 1 || vat > 1.2) {
      throw new Error("vat must be between 1 and 1.2");
    }
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.vat = vat;
  }

  priceExcludingTax(): number {
    return this.unitPrice * this.quantity;
  }

  vatPrice(): number {
    return this.priceExcludingTax() * this.vat;
  }
}
