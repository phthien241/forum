import React from "react";
import "./Thread.scss";
import { useNavigate } from "react-router-dom";

export interface ThreadProps {
  heading: string;
  reply: number;
  date: Date;
}

const Thread: React.FC<ThreadProps> = ({ heading, reply, date }) => {
  const dateString = date.toLocaleDateString();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/thread/${heading}`);
  };
  return (
    <div className="thread">
      <div className="thread--heading">
        <p onClick={() => handleNavigate()}>{heading}</p>
      </div>
      <div className="thread--stats">
        <p>Replies: {reply}</p>
      </div>
      <div className="thread--time">{dateString}</div>
    </div>
  );
};

export default Thread;
