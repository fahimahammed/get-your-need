import {Product, Category, Review, User} from "../../dbConfig/db.js";
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

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
      },
      signup: async(parent:any, args:any, context:any)=>{
        const {name, email, password } = args.data;
        console.log(email, password)
        const alreadyExist = await User.findOne({email: email});
        console.log(alreadyExist)
        if(alreadyExist){
          console.log("email already exist");
        }
        else{
          const hassPass = await argon2.hash(password);
          const userData = new User({
            name: name,
            email: email,
            password: hassPass
          });
          const insertedUser = await userData.save();
          return insertedUser; 
        }
      },
      login: async(parent:any, args:any, context:any)=>{
        const { email, password} = args.data;
        const user = await User.findOne({email: email});
        if(!user){
          console.log("not found");
        }
        else{
          if(!(await argon2.verify(user.password, password))){
            console.log("pass not match")
          }
          else{
            const token = jwt.sign({data: {userId: user._id, email: user.email}}, "Secret_code", {expiresIn: '1h'})
            return {user, token};
          }
        }
      } 
    }
  };