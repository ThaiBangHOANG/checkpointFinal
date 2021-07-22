import Title from "../Components/AboutContactTitle";
import React from "react";
import Hobbies from "../Components/Hobbies";

function HobbiesPage() {
  return (
    <div className="Hobbies">
      <Title title={"Hobbies"} span={"Hobbies"} />
      {Hobbies.map((hobby) => {
        return (
          <ul className="hobby" key={hobby.id}>
            <li className="hobby-content">
              <a
                href={hobby.link}
                className="linkWeb"
                target="_blank"
                rel="noreferrer"
              >
                <img src={hobby.image} alt="" />;
              </a>
              <p className="para">{hobby.paragraph}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default HobbiesPage;
