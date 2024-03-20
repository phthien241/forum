import React from "react";
import "./ThreadComment.scss";
import { User } from "../../models/user";
import { Comment } from "../../models/comment";

interface ThreadCommentProps {
  comment: Comment;
}

const ThreadComment: React.FC<ThreadCommentProps> = ({ comment }) => {
  return (
    <div className="thread-comment">
      <div className="thread-comment--grid">
        <div className="thread-comment--user">
          <div className="thread-comment--user-avatar">
            <img src={comment.user.avatar} alt="avatar" />
          </div>
          <div className="thread-comment--user-name">
            <p>{comment.user.name}</p>
          </div>
        </div>
        <div className="thread-comment--content">
          <div className="thread-comment--content-time">
            <p>{comment.date.toLocaleDateString()}</p>
          </div>
          <hr />
          <div className="thread-comment--content-text">
            <p>{comment.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadComment;
