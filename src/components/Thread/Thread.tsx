import React from "react";
import "./Thread.scss";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

export interface ThreadProps {
  id: string;
  heading: string;
  reply: number;
  date: Date;
}

const ThreadComponent: React.FC<ThreadProps> = ({
  id,
  heading,
  reply,
  date,

}) => {
  const dateString = date.toLocaleDateString();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/thread/${slugify(heading)}/${id}`);
  };
  return (
    <div className="thread">
      <div className="thread--heading">
        <p onClick={() => handleNavigate()}>{heading}</p>
      </div>
      <div className="thread--stats">
        <p>Replies: {reply - 1}</p>
      </div>
      <div className="thread--time">{dateString}</div>
    </div>
  );
};

export default ThreadComponent;
