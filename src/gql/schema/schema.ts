export const typeDefs = `#graphql
  type Query {
    hello: String
    products: [Product]
    product(productId: ID): Product
  }
  type Product {
    id: ID
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    categoryId: String
  }
`;