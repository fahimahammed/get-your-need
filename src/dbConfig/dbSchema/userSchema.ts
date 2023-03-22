// 2. Create a Schema corresponding to the document interface.
import { Schema } from "mongoose";
import { IUser } from "../interface/IUser";
export const userSchema = new Schema<IUser>({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
    }
});