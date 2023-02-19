import {Product, Category, Review} from "../../dbConfig/db.js";

export const resolvers = {
    Query: {
      hello: () => 'world',
      products: async()=>{
        const result = await Product.find({});
        return result;
      },
      product: async(parent:any, {productId}, context:any)=>{
        const result = await Product.findOne({_id: productId})
        return result;
      },
      categories: async()=>{
        const result = await Category.find({});
        return result;
      },
      category: async(parent:any, {categoryId}, context:any)=>{
        const result = await Category.findOne({_id: categoryId});
        return result;
      },
      reviews: async()=>{
        const result = await Review.find({});
        return result;
      }
    },
    Product: {
      category: async(parent:any, args:any, context:any)=>{
        const result = await Category.findOne({categoryId: parent.id});
        return result;
      },
      reviews: async(parent:any, args:any, context:any)=>{
        const result = await Review.find({productId: parent._id});
        return result;
      }
    },

    Mutation: {
      addProduct: async(parent:any, args:any, context:any)=>{
        const productData = new Product(args.data);
        const postProduct = await productData.save();
        return postProduct;
      },
      deleteProduct: async(parent:any, args:any, context:any)=>{
        const deleteData = await Product.findByIdAndDelete(args.productId)
        if(deleteData){
          return true;
        }else{
          return false;
        }
      },
      updateProduct: async(parent:any, args:any, context:any)=>{
        const updateData = await Product.findOneAndUpdate(args.productId, args.data);
        if(updateData){
          return true;
        }else{
          return false;
        }
      } 
    }
  };