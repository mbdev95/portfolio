import { Link } from "react-router-dom";
import { useContext } from "react";
import { pageInfoContext } from "../context";

const About = () => {
  const context = useContext(pageInfoContext);

  // The h1Text and socialMediaInHeader functions will display the h1 text and social media icons differently depending on the viewport width.
  return (
    <div className="about">
      <div className="about--header">
        {context.h1Text("about")}
        {context.socialMediaInHeader("about")}
        <nav className="about--header--nav">
          <Link exact="true" to="/">
            <button type="button">Home</button>
          </Link>
          <Link to="/portfolio">
            <button type="button">Portfolio</button>
          </Link>
        </nav>
      </div>
      <hr />
      <div className="about--main">
        <p>
          At this time I am working for DataDrill Communications as a software
          developer. I help to create new applications and manage existing
          applications. I work on accounting applications and programming a
          device to locate an optimal cell signal.
        </p>
        <p>
          I have graduated from the online learning school, OpenClassrooms, with
          a diploma in web development. The program involved creating a series
          of web applications, which were then presented virtually and assessed.
          Each project involved a different aspect of web development including:
          mobile-first responsive web design, animations, object-oriented
          programming for JavaScript, MySQL databases, React, jQuery and
          Bootstrap.
        </p>
        <p>
          I love computer programming for the problems it presents which force
          me to constantly improve through learning. I enjoy dynamic work where
          the problems and solutions are constantly changing, keeping me on my
          toes. I have completed various side project, and a bootcamp run by the
          tech company Neo Financial.
        </p>
        <p>
          I enjoy learning from those around me and achieving a common goal
          through focused work. Furthermore, I learned programming in a mostly
          independent fashion, solving problems through efficient research,
          making me a quick learner.
        </p>
        <p>
          My time away from the computer is usually spent outside. I am
          passionate about the outdoors and enjoy skiing, kayaking, biking and
          hiking. Also, I love meeting people from all over the world and
          learning from their experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
