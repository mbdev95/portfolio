import {useContext} from "react";
import {pageInfoContext} from '../context';

const About = () => {
    const pageSlide = useContext(pageInfoContext).pageSlide;
    return (
        <div className="about">
            <h1>This is the About Page</h1>
            <button type="button" onClick={event => pageSlide(event.target.textContent.toLowerCase(), 'about')}>Home</button>
            <button type="button" onClick={event => pageSlide(event.target.textContent.toLowerCase(), 'about')}>Portfolio</button>
        </div>
    )
}

export default About;