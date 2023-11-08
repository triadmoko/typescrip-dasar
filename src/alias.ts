export type ID = String | Number

export type Product = {
      ID: ID
      Name: String
      Price: Number
      Stock: Number
      Category: Category
      Description?: String
}

export type Category = {
      ID: ID
      Name: String
}