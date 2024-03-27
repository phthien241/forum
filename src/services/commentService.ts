import axios from "axios";
import { environment } from "../environment";

export const postComment = async (text: string, userId: string, threadId: string) => {
    const response = await axios.put(`${environment.apiURL}/api/comment/post-comment`, {text,userId,threadId});
    return response;
};

