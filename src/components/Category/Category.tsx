import React from "react";
import "./Category.scss";
import BreadScrumb from "../BreadScrumb/BreadScrumb";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

export interface subHeadingObject {
  subHeading: string;
  path: string;
}

export interface CategoryProps {
  heading: string;
  subHeading: subHeadingObject[];
}

const Category: React.FC<{ categories: CategoryProps[] }> = ({
  categories,
}) => {
  const navigate = useNavigate();
  const handleNavigate = (heading: string,state:any) => {
    const path = slugify(heading, {
      lower: true,
      strict: true,
      replacement: "-",
    });
    navigate(`forum/${path}`,{state});
  };
  return (
    <>
      {categories.map((category, index) => {
        return (
          <div key={index} className="category">
            <div className="category--heading">{category.heading}</div>
            <div className="category--sub-heading">
              {category.subHeading.map((subHeading, index) => {
                return (
                  <div key={index} className="category--sub-heading-list">
                    <p onClick={() => handleNavigate(subHeading.subHeading,{heading:category.heading,subHeading:subHeading.subHeading})}>
                      {subHeading.subHeading}
                    </p>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Category;
