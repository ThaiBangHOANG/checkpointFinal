import React from "react";
import { useState } from "react";
import Title from "../Components/AboutContactTitle";
import All from "../Components/All";
import MenuItems from "../Components/MenuItems";
import Portfolio from "../Components/Portfolio";

const allCategories = [
  "All",
  ...new Set(Portfolio.map((item) => item.category)),
];
function PortfolioPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(Portfolio);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(Portfolio);
      return;
    }

    const filterCategory = Portfolio.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filterCategory);
  };

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={"Portfolio"} span={"Portfolio"} />
      </div>
      <div className="portfolios-data">
        <All filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfolioPage;
