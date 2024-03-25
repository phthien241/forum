import axios from "axios";


export const postComment = async (text: string, userId: string, threadId: string) => {
    const response = await axios.put('http://localhost:3001/api/comment/post-comment', {text,userId,threadId});
    return response;
};

