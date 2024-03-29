import axios from "axios";
import { Thread } from "../models/thread";
import { environment } from "../environment";


export const fetchAllThreads = async (currentCategory: string): Promise<Thread[]> => {
  try {
    console.log(`${environment.apiURL}/api/thread/get-list-thread/${currentCategory}`)
    const response = await axios.get(`${environment.apiURL}/api/thread/get-list-thread/${currentCategory}`);
    const threads: Thread[] = await response.data;
    return threads;
  } catch (error) {
    console.error("Fetching all threads failed:", error);
    throw error;
  }
};


export const fetchThread = async (id: string): Promise<Thread> => {
    try {
      const response = await axios.get(`${environment.apiURL}/api/thread/get-thread-info/${id}`);
      if (!response.data) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const thread: Thread = await response.data;
      return thread;
    } catch (error) {
      console.error("Fetching thread failed:", error);
      throw error;
    }
}

