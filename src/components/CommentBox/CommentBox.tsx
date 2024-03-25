import React, { useState } from "react";
import "./CommentBox.scss";
import {Comment} from "../../models/comment";
import { usePostComment } from "../../hooks/usePostComment";

interface CommentBoxProps{
  userId: string;
  threadId: string;
}

const CommentBox: React.FC<CommentBoxProps> = ({userId,threadId}) => {
    const [comment,setComment] = useState('')
    const {handlePostComment,isLoading, error, success} = usePostComment();
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    }
    const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handlePostComment(comment,userId,threadId);
        setComment('');
    }
  return (
    <div className="comment-box">
      <form className="mb-6" onSubmit={handleSubmmit}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">
                Your reply
            </label>
            <textarea
                id="comment"
                rows={6}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
                value={comment}
                onChange={handleTextChange}
                disabled={isLoading}
            ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Post comment
        </button>
      </form>
    </div>
  );
};

export default CommentBox;
