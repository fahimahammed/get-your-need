import { model, connect } from 'mongoose';
import { IProduct } from './interface/IProduct';
import { productSchema } from './dbSchema/productSchema.js';


// 3. Create a Model.
const Product = model<IProduct>('products', productSchema);

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/e-commerce');

//   const user = new User({
//     name: 'Bill',
//     email: 'bill@initech.com',
//     avatar: 'https://i.imgur.com/dM7Thhn.png'
//   });
  //await user.save();

//   const user = await User.find({});

//   console.log(user); // 'bill@initech.com'
}

export default Product;