import { useEffect, useContext } from "react";
import { pageInfoContext } from "../context";
import { Link } from "react-router-dom";
import ExpressFood from "./portfolio/ExpressFood";
import FilmFestival from "./portfolio/FilmFestival";
import ARPingPong from "./portfolio/ARPingPong";
import RestaurantReviewLocator from "./portfolio/RestaurantReviewLocator";
import WarOfWeapons from "./portfolio/WarOfWeapons";
import DataDrillCommunications from "./portfolio/DataDrillCommunications";

const Portfolio = () => {
  // The project div's height is adjusted on page load and resize to ensure the project div is properly sized at ninety percent minus the portfolio header's height.
  const projectHeightCalculator = () => {
    const portfolioHeaderHeight =
      document.querySelector(".portfolio--header").offsetHeight;
    const portolioHeight = document.querySelector(".portfolio").offsetHeight;
    const projectHeightPercentage =
      100 - (portfolioHeaderHeight / portolioHeight) * 100;
    document
      .querySelector(".projects")
      .style.setProperty("--project-height", projectHeightPercentage + "%");
  };

  window.onresize = () => projectHeightCalculator();

  useEffect(() => {
    projectHeightCalculator();
  }, []);

  const context = useContext(pageInfoContext);

  // The h1Text and socialMediaInHeader functions will display the h1 text and social media icons differently depending on the viewport width.
  return (
    <div className="portfolio">
      <div className="portfolio--header">
        {context.h1Text("portfolio")}
        {context.socialMediaInHeader("portfolio")}
        <nav className="portfolio--header--nav">
          <Link exact="true" to="/">
            <button type="button">Home</button>
          </Link>
          <Link to="/about">
            <button type="button">About</button>
          </Link>
        </nav>
      </div>
      <hr />
      <div className="projects">
        <DataDrillCommunications />
        <FilmFestival />
        <ARPingPong />
        <WarOfWeapons />
        <ExpressFood />
        <RestaurantReviewLocator />
      </div>
    </div>
  );
};

export default Portfolio;
