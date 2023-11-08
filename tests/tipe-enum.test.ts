import { Customer, CustomerType } from "../src/enum";

describe('Type Enum', () => {
      it('should enum', () => {
            const customer: Customer = {
                  ID: "1",
                  Name: "jhon",
                  Type: CustomerType.PLATINUM
            }
            console.log(customer);
      });
});