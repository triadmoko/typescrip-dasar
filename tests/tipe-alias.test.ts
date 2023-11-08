import { Category, Product } from "../src/alias";

describe('Tipe data alias', () => {
      it('should alias', () => {
            const category: Category = {
                  ID: "1",
                  Name: "Hp"
            }
            const product: Product = {
                  Category: category,
                  ID: "1",
                  Name: "Iphone 30",
                  Price: 200,
                  Stock: 400
            }
            console.info(product);

      });
});