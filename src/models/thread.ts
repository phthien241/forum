import { Comment } from "./comment";

export interface Thread {
    _id: string;
    heading: string;
    comments: Comment[];
    category: string;
}