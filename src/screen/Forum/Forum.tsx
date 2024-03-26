import React, { useEffect, useState } from "react";
import BreadScrumb from "../../components/BreadScrumb/BreadScrumb";
import Navbar from "../../components/Navbar/Navbar";
import ThreadTable from "../../components/ThreadTable/ThreadTable";
import { findParentHeading } from "../../constants/forumData";
import deslugify from "../../utils/deslugify";
import Pagination from "../../components/Pagination/Pagination";
import useGetThreads from "../../hooks/useGetThread";
import { ThreadProps } from "../../components/Thread/Thread";
import { transformThreadData } from "../../utils/transformThreadData";

const Forum: React.FC = () => {
  const [threads, setThreads] = useState<ThreadProps[]>([]);
  const lastSegment = window.location.pathname.split("/").filter(Boolean).pop();
  const currentPage = deslugify(lastSegment!);
  const parentCurrentPage = findParentHeading(currentPage);
  const { fetchedThreads, loading, error } = useGetThreads(currentPage);
  useEffect(() => {
    const transformedThread = fetchedThreads.map((thread) =>
      transformThreadData(thread)
    );
    setThreads(transformedThread);
  }, [fetchedThreads]);

  if (loading) {
    return <div>Loading threads...</div>;
  }
  if (error) {
    return <div>Error loading threads: {error.message}</div>;
  }

  return (
    <div className="forum">
      
      <Navbar />
      <BreadScrumb
        navHeadings={[parentCurrentPage, currentPage]}
        headingForum={currentPage}
      />
      <ThreadTable threads={threads} />
      <Pagination length={threads.length} current={1} />
    </div>
  );
};

export default Forum;
