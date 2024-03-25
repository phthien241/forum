// useThreads.tsx
import { useState, useEffect } from 'react';
import { fetchAllThreads } from '../services/threadService';
import { Thread } from '../models/thread';

const useGetThreads = () => {
  const [fetchedThreads, setFetchedThreads] = useState<Thread[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const data = await fetchAllThreads();
        setFetchedThreads(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchThreads();
  }, []);

  return { fetchedThreads, loading, error };
};

export default useGetThreads;
