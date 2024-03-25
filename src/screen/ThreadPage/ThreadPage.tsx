import React, { useEffect, useState } from "react";
import "./ThreadPage.scss";
import { User } from "../../models/user";
import { Comment } from "../../models/comment";
import avatar from "../../assets/avatar.jpg";
import ThreadComment from "../../components/ThreadComment/ThreadComment";
import Navbar from "../../components/Navbar/Navbar";
import CommentBox from "../../components/CommentBox/CommentBox";
import { useParams } from "react-router-dom";
import useGetThreadInfo from "../../hooks/useGetThreadInfo";
import { Thread } from "../../models/thread";
import BreadScrumb from "../../components/BreadScrumb/BreadScrumb";
import { findParentHeading } from "../../constants/forumData";

const ThreadPage: React.FC = () => {
  const { slug, threadId } = useParams();

  const [thread, setThread] = useState<Thread | null>(null);
  const { fetchedThread, loading, error } = useGetThreadInfo(threadId);
  useEffect(() => {
    if (fetchedThread) {
      setThread(fetchedThread);
    }
  }, [fetchedThread]);
  return (
    <div className="thread-page">
      <Navbar />
      {(error || !thread) && <div>Error loading thread:</div>}
      {!error && !loading && thread && (
        <div>
          <div className="thread-page--head">
            <BreadScrumb
              navHeadings={[
                findParentHeading(thread.category),
                thread.category,
                "Thread",
              ]}
              headingForum={thread.heading}
            />
          </div>
          <div className="thread-page--body">
            {thread.comments.map((comment, index) => (
              <React.Fragment key={index}>
                <div>
                  <ThreadComment comment={comment} />
                </div>
              </React.Fragment>
            ))}
            <CommentBox userId="65fff7bd288bf9ccba240a04" threadId={thread._id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreadPage;
