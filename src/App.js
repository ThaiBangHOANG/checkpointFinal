import "./App.scss";
import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import HobbiesPage from "./Pages/HobbiesPage";
import ContactPage from "./Pages/ContactPage";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolio" exact>
              <PortfolioPage />
            </Route>
            <Route path="/hobbies" exact>
              <HobbiesPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
          <ScrollToTop
            smooth
            color="#a4acc4"
            style={{
              marginTop: "50vh",
              backgroundColor: "transparent",
              boxShadow: "none",
              width: "20px",
              height: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
