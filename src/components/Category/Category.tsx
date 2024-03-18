import React from "react";
import "./Category.scss";

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
  return (
    <>
      {categories.map((category, index) => {
        return (
          <div key={index} className="category">
            <div className="category--heading">
              {category.heading}
            </div>
            <div className="category--sub-heading">
              {category.subHeading.map((subHeading, index) => {
                return (
                  <div key={index} className="category--sub-heading-list">
                    <p>{subHeading.subHeading}</p>
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
