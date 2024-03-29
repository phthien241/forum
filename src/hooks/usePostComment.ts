import { useState, useEffect, useCallback } from 'react';
import { postComment } from '../services/commentService';
import { Comment } from '../models/comment';

export const usePostComment = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState<Error | null>(null);
    const [success, setSuccess] = useState(false);
    const handlePostComment =useCallback( async (text: string, userId: string, threadId: string) => {
        setIsLoading(true);
        setIsError(null);
        setSuccess(false);
        try {
            await postComment(text, userId, threadId);
            setSuccess(true);
        } catch (err) {
            setIsError(err as Error);
        } finally {
            setIsLoading(false);
        }
    },[]);


    return { handlePostComment, isLoading, isError, success };
};