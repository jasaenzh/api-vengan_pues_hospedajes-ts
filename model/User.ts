import { Schema, model, models } from "mongoose";
import { type } from "os";

export enum ProfileType {
    Administrator = "administrator",
    User = "user",
    PageManager = "page-manager",
}

export interface IUser {
    username: string;
    email: string;
    password: string;
    profile: ProfileType;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    profile: {
        type: String,
        default: ProfileType.User,
    }
});

const User = models.User || model<IUser>("User", userSchema);

export default User;
