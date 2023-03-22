import { Product, Category, Review, User } from "../../dbConfig/db.js";
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { getUserFromToken } from "../../utils/getUserFromToken.js";
interface Context {
    token?: string;
  }
  
  interface UserArgs {
      userId: string;
      email: string;
  }

export const Mutation = {
        addProduct: async (parent: any, args: any, { token }: Context) => {
          const user:UserArgs = await getUserFromToken(token);
          console.log("user Info: ",user);
          const findUser = await User.findById(user.userId);
          if (findUser.role == 'user') {
            const productData = new Product(args.data);
            const postProduct = await productData.save();
            return postProduct;
          }
          return null;
        },
        deleteProduct: async (parent: any, args: any, context: any) => {
          const deleteData = await Product.findByIdAndDelete(args.productId)
          if (deleteData) {
            return true;
          } else {
            return false;
          }
        },
        updateProduct: async (parent: any, args: any, context: any) => {
          const updateData = await Product.findOneAndUpdate(args.productId, args.data);
          if (updateData) {
            return true;
          } else {
            return false;
          }
        },
        signup: async (parent: any, args: any, context: any) => {
          const { name, email, password, role } = args.data;
          console.log(email, password)
          const alreadyExist = await User.findOne({ email: email });
          console.log(alreadyExist)
          if (alreadyExist) {
            console.log("email already exist");
          }
          else {
            const hassPass = await argon2.hash(password);
            const userData = new User({
              name: name,
              email: email,
              password: hassPass,
              role
            });
            const insertedUser = await userData.save();
            return insertedUser;
          }
        },
        login: async (parent: any, args: any, context: any) => {
          const { email, password } = args.data;
          const user = await User.findOne({ email: email });
          if (!user) {
            console.log("not found");
          }
          else {
            if (!(await argon2.verify(user.password, password))) {
              console.log("pass not match")
            }
            else {
              const token = jwt.sign({ data: { userId: user._id, email: user.email } }, "Secret_code", { expiresIn: '5h' })
              return { user, token };
            }
          }
        }
      
}