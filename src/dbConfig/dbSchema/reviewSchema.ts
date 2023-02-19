// 2. Create a Schema corresponding to the document interface.
import { Schema } from "mongoose";
import { IReview } from "../interface/IReview";
export const reviewSchema = new Schema<IReview>({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    productId: {
        type: String,
        required: true
    }
});