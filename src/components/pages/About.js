import {useContext} from "react";
import {pageInfoContext} from '../context';
import {Link} from 'react-router-dom';

const About = () => {
    const pageSlide = useContext(pageInfoContext).pageSlide;
    return (
        <div className="about">
            <h1>This is the About Page</h1>
            <Link exact='true' to='/'><button type="button" onClick={event => pageSlide(event.target.textContent.toLowerCase(), 'about')}>Home</button></Link>
            <Link to='/portfolio'><button type="button" onClick={event => pageSlide(event.target.textContent.toLowerCase(), 'about')}>Portfolio</button></Link>
        </div>
    )
}

export default About;