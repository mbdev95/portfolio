import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <h1>This is the About Page</h1>
            <Link exact='true' to='/'><button type="button" >Home</button></Link>
            <Link to='/portfolio'><button type="button" >Portfolio</button></Link>
        </div>
    )
}

export default About;