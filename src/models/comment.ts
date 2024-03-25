import { User } from "./user";

export interface Comment {
    _id: string;
    text: string;
    user: User;
    createdAt: Date;
}