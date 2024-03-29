import axios from "axios";
import { Thread } from "../models/thread";
import { environment } from "../environment";


export const fetchAllThreads = async (currentCategory: string): Promise<Thread[]> => {
  try {
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

export const postThread = async (thread: Thread) => {
  try {
    console.log(thread);
    const response = await axios.post(`${environment.apiURL}/api/thread/post-thread`, thread);
    return response.data;
  } catch (error) {
    console.error("Posting thread failed:", error);
    throw error;
  }
}

