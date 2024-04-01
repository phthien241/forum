import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import SubNavbar from "../../components/SubNavbar/SubNavbar";
import Category, { CategoryProps } from "../../components/Category/Category";
import CommentBox from "../../components/CommentBox/CommentBox";
import { useNavigate } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

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
        {
          subHeading: "Information Technology",
          path: "/information-technology",
        },
        { subHeading: "Engineering", path: "/engineering" },
        { subHeading: "Economics & Finance", path: "/economics-finance" },
      ],
    },
  ];

  return (
    <>
      <div className="home--category">
        <button
          className="ml-8 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleNavigate("/thread-form")}
        >
          Post Thread
        </button>
        <Category categories={categories} />
      </div>
    </>
  );
}
