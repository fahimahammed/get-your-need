import { Schema } from "mongoose";
import { ICategory } from "../interface/ICategory";
export const categorySchema = new Schema<ICategory>({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});