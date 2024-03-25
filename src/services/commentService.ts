import axios from "axios";
import { Thread } from "../models/thread";
import { Comment } from "../models/comment";

export const postComment = async (text: string, userId: string, threadId: string) => {
    const commentData = {text,userId,threadId};
    const response = await axios.put('http://localhost:3001/api/comment/post-comment', commentData);
    return response;
};

