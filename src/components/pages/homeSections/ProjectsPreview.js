import { HashLink as Link } from "react-router-hash-link";

// React router's hash-link is used to enable the links to have the functionality of relative links, and link to a specific project on the portfolio page.
const ProjectsPreview = () => {
  return (
    <div className="previewProjects">
      <Link to="/portfolio#WorkExperience">
        <div className="previewProjects--project--1">
          <h2>DataDrill Work Experience</h2>
          <ul>
            <li>Python</li>
            <li>Django</li>
            <li>MySQL</li>
            <li>IIS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </Link>
      <Link to="/portfolio#AugmentedRealityPingPong">
        <div className="previewProjects--project--2">
          <h2>Augmented Reality Ping-Pong</h2>
          <ul>
            <li>A-frame</li>
            <li>AR.js</li>
            <li>Vanilla JavaScript</li>
          </ul>
        </div>
      </Link>
      <Link to="/portfolio#RestaurantReviewLocator">
        <div className="previewProjects--project--3">
          <h2>Restaurant Review Locator</h2>
          <ul>
            <li>React</li>
            <li>REST-APIs</li>
          </ul>
        </div>
      </Link>
      <Link to="/portfolio#BrooklynBridgeFilmFestival">
        <div className="previewProjects--project--4">
          <h2>Brooklyn Bridge Film Festival</h2>
          <ul>
            <li>Bootstrap</li>
            <li>CSS3</li>
            <li>HTML5</li>
          </ul>
        </div>
      </Link>
      <Link to="/portfolio#ExpressFood">
        <div className="previewProjects--project--5">
          <h2>Express Food Database</h2>
          <ul>
            <li>UML Diagrams</li>
            <li>MySQL Database/Queries</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default ProjectsPreview;
