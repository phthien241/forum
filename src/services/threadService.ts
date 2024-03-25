import { Thread } from "../models/thread";

export const fetchAllThreads = async (): Promise<Thread[]> => {
  try {
    const response = await fetch('http://localhost:3001/api/thread');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const threads: Thread[] = await response.json();
    return threads;
  } catch (error) {
    console.error("Fetching all threads failed:", error);
    throw error;
  }
};


export const fetchThread = async (id: string): Promise<Thread> => {
    try {
      const response = await fetch(`http://localhost:3001/api/thread/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const thread: Thread = await response.json();
      return thread;
    } catch (error) {
      console.error("Fetching thread failed:", error);
      throw error;
    }
}

