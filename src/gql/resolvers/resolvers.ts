import {Product, Category, Review} from "../../dbConfig/db.js";

export const resolvers = {
    Query: {
      hello: () => 'world',
      products: async()=>{
        const result = await Product.find({});
        return result;
      },
      product: async(parent:any, {productId}, context:any)=>{
        const result = await Product.findOne({id: productId})
        return result;
      },
      categories: async()=>{
        const result = await Category.find({});
        return result;
      },
      category: async(parent, {categoryId}, context)=>{
        const result = await Category.findOne({id: categoryId});
        return result;
      },
      reviews: async()=>{
        const result = await Review.find({});
        return result;
      }
    },
  };