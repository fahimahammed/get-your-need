// 2. Create a Schema corresponding to the document interface.
import { Schema } from "mongoose";
import { IProduct } from "../interface/IProduct";
export const productSchema = new Schema<IProduct>({
    name: {
        type: String
    },
    description: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    onSale: {
        type: Boolean
    },
    categoryId: {
        type: String
    }
});