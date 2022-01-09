import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { pageInfoContext } from '../context';

const About = () => {

    const context = useContext(pageInfoContext);

    return (
        <div className="about">
            <div className='about--header'>
                {context.h1Text('about')}
                {context.socialMediaInHeader('about')}
                <nav className='about--header--nav'>
                    <Link exact='true' to='/'><button type="button" >Home</button></Link>
                    <Link to='/portfolio'><button type="button" >Portfolio</button></Link>
                </nav>
            </div>
            <hr/>
            <div className='about--main'>
                <p>I have recently graduated from the online learning school, OpenClassrooms, with a diploma in web development.  The program involved creating a series of web applications, which were then presented virtually and assessed.  Each project involved a different aspect of web development including: mobile-first responsive web design, animations, SASS, object-oriented programming for JavaScript, MySQL databases, React, jQuery and Bootstrap.</p>
                <p>I love computer programming for the problems it forces you to solve and the need for constant improvement through learning.  I enjoy dynamic work where the problems and solutions are constantly changing, keeping you on your toes.</p>
                <p>I enjoy learning from those around me and achieving a common goal through focused work.  Furthermore, I learned programming in a mostly independent fashion, solving problems through efficient research, making me a quick learner.</p>
                <p>My time away from the computer is usually spent outside.  I am passionate about the outdoors and enjoy skiing, kayaking, biking and hiking.  Also, I love meeting people from all over the world and learning from their experiences.</p>
            </div>
        </div>
    )
}

export default About;