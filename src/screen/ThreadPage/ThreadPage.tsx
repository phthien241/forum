import React from "react";
import "./ThreadPage.scss";
import { User } from "../../models/user";
import { Comment } from "../../models/comment";
import avatar from "../../assets/avatar.jpg";
import ThreadComment from "../../components/ThreadComment/ThreadComment";
import Navbar from "../../components/Navbar/Navbar";
import CommentBox from "../../components/CommentBox/CommentBox";

const ThreadPage: React.FC = () => {
  const users: User[] = [
    {
      id: "user1",
      name: "Alice",
      avatar: avatar,
    },
    {
      id: "user2",
      name: "Bob",
      avatar: avatar,
    },
    {
      id: "user3",
      name: "Charlie",
      avatar: avatar,
    },
  ];
  const comments: Comment[] = [
    {
      id: "comment1",
      text: "This is a great post!",
      user: users[0], // Alice
      date: new Date("2024-03-20T12:00:00Z"),
    },
    {
      id: "comment2",
      text: "Thanks for sharing.",
      user: users[1], // Bob
      date: new Date("2024-03-20T13:00:00Z"),
    },
    {
      id: "comment3",
      text: "I have a question about this.",
      user: users[2], // Charlie
      date: new Date("2024-03-20T14:00:00Z"),
    },
  ];

  

  return (
    <div className="thread-page">
        <Navbar/>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <ThreadComment comment={comment} />
            <CommentBox/>
          </div>
        );
      })}

    </div>
  );
};

export default ThreadPage;
