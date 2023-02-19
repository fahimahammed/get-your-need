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
    _id: ID
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
    _id: ID,
    name: String
  }
  type Review{
    _id: ID
    title: String
    comment: String
    rating: Int
    productId: ID
  }

  type Mutation {
    addProduct(data: productData!): Product
    deleteProduct(productId: ID!): Boolean
    updateProduct(productId: ID!, data: productData!): Boolean
  }

  input productData {
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    categoryId: String
  }
`;