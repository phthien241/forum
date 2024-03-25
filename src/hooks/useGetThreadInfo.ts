import { useState, useEffect } from 'react';
import { Thread } from '../models/thread';
import { fetchThread } from '../services/threadService';


const useGetThreadInfo = (threadId: string | undefined) => {
    const [fetchedThread, setFetchedThread] = useState<Thread | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        if(!threadId) return;
        const fetchThreadInfo = async () => {
            try {
                const data = await fetchThread(threadId);
                setFetchedThread(data);
            } catch (err) {
                console.error('Error fetching thread info:', err);
                setError(err as Error);
            }finally{
                setLoading(false);
            }
        };
        fetchThreadInfo();
    }, [threadId]);

    return {fetchedThread,loading,error};
};

export default useGetThreadInfo;