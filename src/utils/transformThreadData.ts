import { ThreadProps } from '../components/Thread/Thread';
import { Thread } from "../models/thread"; 

export const transformThreadData = (thread: Thread): ThreadProps => {
  const reply = thread.comments.length;
  const date = thread.comments[0] ? new Date(thread.comments[0].createdAt) : new Date();
  return {
    id: thread._id,
    heading: thread.heading,
    reply,
    date,
  };
};