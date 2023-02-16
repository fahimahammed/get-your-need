import { model, connect } from 'mongoose';
import { IProduct } from './interface/IProduct';
import { productSchema } from './dbSchema/productSchema.js';


// 1. Create a Model.
const Product = model<IProduct>('products', productSchema);

run().catch(err => console.log(err));

async function run() {
  //2. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/e-commerce');
}

export default Product;