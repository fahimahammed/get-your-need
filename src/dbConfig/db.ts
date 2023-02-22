import { model, connect } from 'mongoose';
import { IProduct } from './interface/IProduct';
import { productSchema } from './dbSchema/productSchema.js';
import { ICategory } from './interface/ICategory';
import { categorySchema } from './dbSchema/categorySchema.js';
import { IReview } from './interface/IReview';
import { reviewSchema } from './dbSchema/reviewSchema.js';
import { IUser } from './interface/IUser';
import { userSchema } from './dbSchema/userSchema.js';


// 1. Create a Model.
export const Product = model<IProduct>('products', productSchema);
export const Category = model<ICategory>('categories', categorySchema);
export const Review = model<IReview>('reviews', reviewSchema);
export const User = model<IUser>('user', userSchema);
run().catch(err => console.log(err));

async function run() {
  //2. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/e-commerce');
}

// export default {
//   Product,
//   Category
// };