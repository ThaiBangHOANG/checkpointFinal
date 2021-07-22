import React from "react";

function MenuItems({ menuItem }) {
  return (
    <div className="portfolios">
      {menuItem.map((item) => {
        return (
          <div className="porfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.icon}
                  </a>
                </li>
              </ul>
            </div>
            <h2 className="titlePortfolio">
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </h2>
            <p>{item.describe}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
