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
          Currently, I am working for DataDrill Communications as a software
          developer. I help to create new applications and manage existing
          applications. I work on accounting applications and programming a
          device to locate an optimal cell signal.
        </p>
        <p>
          Previously, I graduated from the online learning school,
          OpenClassrooms, with a diploma in web development. The program
          involved creating a series of web applications, which were then
          presented and assessed. Each project involved a different aspect of
          web development including: mobile-first responsive web design,
          animations, object-oriented programming for JavaScript, MySQL
          databases, React and Bootstrap.
        </p>
        <p>
          Solving computer problems through consistent learning has been my
          drive and inspiration. I enjoy learning from those around me and
          achieving a common goal through focused work. The work I enjoy the
          most is dynamic, where the problems and solutions are constantly
          changing. I have completed various side projects, and a bootcamp run
          by the tech company Harvest Builders.
        </p>
        <p>
          My time away from the computer is usually spent outside enjoying
          activities such as skiing, kayaking, biking, backcountry camping and
          hiking. Also, I love meeting people from all over the world and
          learning from their experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
