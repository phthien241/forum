import React from "react";
import BreadScrumb from "../../components/BreadScrumb/BreadScrumb";
import Navbar from "../../components/Navbar/Navbar";
import ThreadTable from "../../components/ThreadTable/ThreadTable";
import { ThreadProps } from "../../components/Thread/Thread";
import { findParentHeading } from "../../constants/forumData";
import deslugify from "../../utils/deslugify";
import Pagination from "../../components/Pagination/Pagination";

const Forum: React.FC = () => {
  const threads: ThreadProps[] = [
    {
      heading: "Breaking News: New Technology Breakthrough Announced",
      reply: 150,
      date: new Date("2023-03-15"),
    },
    {
      heading: "Global Economy Update: Trends to Watch",
      reply: 75,
      date: new Date("2023-03-14"),
    },
    {
      heading: "Health Alert: Tips for Staying Healthy This Season",
      reply: 45,
      date: new Date("2023-03-13"),
    },
    {
      heading: "Education in the Digital Age: Opportunities and Challenges",
      reply: 90,
      date: new Date("2023-03-12"),
    },
    {
      heading: "Environmental Update: Renewable Energy Sources on the Rise",
      reply: 120,
      date: new Date("2023-03-11"),
    },
  ];

  const lastSegment = window.location.pathname.split("/").filter(Boolean).pop();
  const currentPage = deslugify(lastSegment!);
  const parentCurrentPage = findParentHeading(currentPage);

    return (
    <div className="forum">
      <Navbar />
      <BreadScrumb navHeadings={[parentCurrentPage, currentPage]} headingForum={currentPage} />
      <ThreadTable threads={threads} />
      <Pagination length={100} current={4} />
    </div>
  );
};

export default Forum;
