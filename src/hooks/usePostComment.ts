import { useState, useEffect } from 'react';
import { postComment } from '../services/commentService';
import { Comment } from '../models/comment';

export const usePostComment = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState(false);
    //   useEffect(()=>{
    //     const handlePostComment = async () => {
    //         setIsLoading(true);
    //         setError(null);
    //         setSuccess(false);
    //         try {
    //           await postComment(text, userId, threadId);
    //           setSuccess(true);
    //         } catch (err) {
    //           setError(err as Error);
    //         } finally {
    //           setIsLoading(false);
    //         }
    //       };
    //       handlePostComment();
    //   },[])
    const handlePostComment = async (text: string, userId: string, threadId: string) => {
        setIsLoading(true);
        setError(null);
        setSuccess(false);
        try {
            await postComment(text, userId, threadId);
            setSuccess(true);
        } catch (err) {
            setError(err as Error);
        } finally {
            setIsLoading(false);
        }
    };

    return { handlePostComment, isLoading, error, success };
};