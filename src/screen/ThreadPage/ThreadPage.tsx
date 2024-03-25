import React, { useEffect, useState } from "react";
import "./ThreadPage.scss";
import ThreadComment from "../../components/ThreadComment/ThreadComment";
import Navbar from "../../components/Navbar/Navbar";
import CommentBox from "../../components/CommentBox/CommentBox";
import { useParams } from "react-router-dom";
import useGetThreadInfo from "../../hooks/useGetThreadInfo";
import { Thread } from "../../models/thread";
import BreadScrumb from "../../components/BreadScrumb/BreadScrumb";
import { findParentHeading } from "../../constants/forumData";
import { usePostComment } from "../../hooks/usePostComment";

const ThreadPage: React.FC = () => {
  const { slug, threadId } = useParams();
  const { handlePostComment, isLoading, isError, success } = usePostComment();
  const [thread, setThread] = useState<Thread | null>(null);
  const { fetchedThread, loading, error, fetchThreadInfo } =
    useGetThreadInfo(threadId);
  useEffect(() => {
    if (fetchedThread) {
      setThread(fetchedThread);
    }
  }, [fetchedThread]);

  const onSubmitComment = (text: string, userId: string, threadId: string) => {
    handlePostComment(text, userId, threadId);
    if (success) {
      fetchThreadInfo();
    }
  };


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
            <CommentBox
              userId="66017548e31c3443f9955e93"
              threadId={thread._id}
              isLoading={isLoading}
              onSubmitComment={onSubmitComment}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreadPage;
