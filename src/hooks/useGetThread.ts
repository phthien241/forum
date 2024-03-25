// useThreads.tsx
import { useState, useEffect } from 'react';
import { fetchAllThreads } from '../services/threadService';
import { Thread } from '../models/thread';

const useGetThreads = (currentCategory: string) => {
  const [fetchedThreads, setFetchedThreads] = useState<Thread[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const fetchThreads = async () => {
    try {
      const data = await fetchAllThreads(currentCategory);
      setFetchedThreads(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchThreads();
  }, []);

  return { fetchedThreads, loading, error };
};

export default useGetThreads;
