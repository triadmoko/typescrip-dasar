export enum CustomerType {
      PLATINUM = "PLATINUM",
      SILVER = "SILVER",
      GOLD = "GOLD"
}

export type Customer = {
      ID: String,
      Name: String,
      Type: CustomerType
}