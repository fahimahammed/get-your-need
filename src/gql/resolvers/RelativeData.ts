import { Product, Category, Review, User } from "../../dbConfig/db.js";
import { IProduct } from "../../dbConfig/interface/IProduct.js";


export const RelativeData = {
Product: {
    category: async (parent:IProduct, args: any, context: any) => {
        console.log(parent)
      const result = await Category.findOne({ categoryId: parent._id });
      return result;
    },
    reviews: async (parent:IProduct, args: any, context: any) => {
      const result = await Review.find({ productId: parent._id });
      return result;
    }
  }
  
};