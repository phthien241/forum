import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import SubNavbar from "../../components/SubNavbar/SubNavbar";
import Category, { CategoryProps } from "../../components/Category/Category";
import Pagination from "../../components/Pagination/Pagination";
import CommentBox from "../../components/CommentBox/CommentBox";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const categories: CategoryProps[] = [
    {
      heading: "Lobby",
      subHeading: [
        { subHeading: "Announcements", path: "/announcements" },
        { subHeading: "Feedback & Suggestions", path: "/feedback" },
        { subHeading: "Staff Room", path: "/staff-room" },
      ],
    },
    {
      heading: "Discussions",
      subHeading: [
        { subHeading: "General News", path: "/general-news" },
        { subHeading: "Science & Technology", path: "/science-technology" },
        { subHeading: "Entertainment", path: "/entertainment" },
        { subHeading: "Sports & Fitness", path: "/sports-fitness" },
      ],
    },
    {
      heading: "Education & Career",
      subHeading: [
        { subHeading: "Languages", path: "/languages" },
        { subHeading: "Information Technology", path: "/information-technology" },
        { subHeading: "Engineering", path: "/engineering" },
        { subHeading: "Economics & Finance", path: "/economics-finance" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <SubNavbar />
      <div className="home--category">
      <Category categories={categories}/>
      <Pagination length={100} current={4} />
      <CommentBox/>
      </div>
      
    </>
  );
}
