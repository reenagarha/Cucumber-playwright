
import { Page, Locator } from '@playwright/test';

type ProductItem = {
  name: string;
  price: number;
  elementHandle: Locator;
};

export class ProductsPage {
 

  constructor(private page: Page) {}
   

  

  async sortHighToLow() {
    await this.page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  }

  async addCheapestAndSecondMostExpensive(): Promise<ProductItem[]> {
    const items = this.page.locator('[data-test="inventory-item"]');
    const count = await items.count();

    const products: ProductItem[] = [];

    for (let i = 0; i < count; i++) {
      const item = items.nth(i);

      const priceText = await item.locator('[data-test="inventory-item-price"]').textContent();
      const name = await item.locator('[data-test="inventory-item-name"]').textContent();

      const price = parseFloat(priceText?.replace('$', '') || '0');
      products.push({ name: name || '', price, elementHandle: item });
    }

    const sorted = products.sort((a, b) => b.price - a.price);
    const secondMostExpensive = sorted[1];
    const cheapest = sorted[sorted.length - 1];

    for (const product of [cheapest, secondMostExpensive]) {
      const addBtn = product.elementHandle.locator('button');
      await addBtn.click();
    }

    return [cheapest, secondMostExpensive];
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

}

