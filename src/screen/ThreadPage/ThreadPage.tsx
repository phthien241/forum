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
import { useAuthenticator } from "@aws-amplify/ui-react";
import useGetUser from "../../hooks/userGetUser";
import { User } from "../../models/user";

const ThreadPage: React.FC = () => {
  const { slug, threadId } = useParams();
  const { handlePostComment, isLoading, isError, success } = usePostComment();
  const [thread, setThread] = useState<Thread | null>(null);
  const { fetchedThread, loading, error, fetchThreadInfo } = useGetThreadInfo(threadId);
  
  const { user } = useAuthenticator((context) => [context.user]);
  const { route } = useAuthenticator((context) => [context.route]);
  const { handleGetUser } = useGetUser();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    if (user && isAuthenticated) {
      handleGetUser(user.userId)
        .then((fetchedUser) => {
          setCurrentUser(fetchedUser);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setIsAuthenticated(route === "authenticated");
  }, [route, isAuthenticated]);
  
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
            {user && currentUser&& (
              <CommentBox
                userId={currentUser._id}
                threadId={thread._id}
                isLoading={isLoading}
                onSubmitComment={onSubmitComment}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreadPage;
