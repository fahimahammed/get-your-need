import Product from "../../dbConfig/db.js";

export const resolvers = {
    Query: {
      hello: () => 'world',
      products: async()=>{
        const result = await Product.find({});
        return result;
      },
      product: async(parent:any, {productId}, context:any)=>{
        const result = await Product.findById(productId)
        return result;
      }
    },
  };