export const typeDefs = `#graphql
  type Query {
    hello: String
    products: [Product]
    product(productId: ID): Product
    categories: [Category]
    category(categoryId: ID): Category
    reviews: [Review]
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
    category: Category
    reviews: [Review]
  }
  type Category{
    id: String,
    name: String
  }
  type Review{
    id: ID
    title: String
    comment: String
    rating: Int
    productId: ID
  }
`;