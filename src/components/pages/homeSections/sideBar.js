import linkedIn from '../../../img/socialMediaIcons/linkedin.webp';
import GitHub from '../../../img/socialMediaIcons/github.webp';
import resume from '../../../img/socialMediaIcons/resume.webp';
import email from '../../../img/socialMediaIcons/email.webp';
import {useEffect, useContext} from 'react';
import { pageInfoContext } from '../../context';
import {Link} from 'react-router-dom';

const SideBar = () => {

// The homeProfileHeight function is executed 250ms after pageload to allow the home page to be rendered so the element's which have required height properties are already rendered.
    useEffect(() => {
        const homeProfileHeightTimeout = setTimeout(() => homeProfileHeight(), 250);
        return () => clearTimeout(homeProfileHeightTimeout);
    }, []);

// The home profile will have justify-content values as the browser is resized.  This avoids scrolling and vertical layout spacing errors.
    window.onresize = () => homeProfileHeight();

// The homeProfileHeight function declaration adjusts the height and justify content properties of the home profile depending on the available space in the home page.
    const homeProfileHeight = () => {
        const home = document.getElementsByClassName('home')[0].getBoundingClientRect();
        const homeHeader = document.getElementsByClassName('home--header')[0].getBoundingClientRect();
        const homeProfile = document.getElementsByClassName('home--profile')[0];
        const homeProfileHeight = home.height - homeHeader.height;
        const emptySpace = document.getElementsByClassName('home--profile--empty')[0];
        emptySpace.style.display = 'block';
        if ( home.bottom > homeProfile.getBoundingClientRect().bottom || emptySpace.getBoundingClientRect().height > 0 ) {
            homeProfile.style.setProperty('--home-profile-height', homeProfileHeight + 'px');
            emptySpace.style.display = 'none';
            homeProfile.style.setProperty('--justify-content-home-profile', 'space-evenly');
        } else {
            homeProfile.style.setProperty('--justify-content-home-profile', 'initial');
        }
    }

    const h1Text = useContext(pageInfoContext).h1Text;

    return (
        <>
            <div className='home--header'>
                {h1Text('home')}
                <nav className='home--header--nav'>
                    <Link to='/portfolio'><button type='button' >Portfolio</button></Link>
                    <Link to='/about'><button type='button' >About</button></Link>
                </nav>
                <hr/>
            </div>
            <div className='home--profile'>
                <p>-- A Software engineer from a galaxy up north --</p>
                <hr/>
                <p>Educated with a diploma in Front-End Web Development from <a href='https://openclassrooms.com/en/about-us' target='_blank' rel='noreferrer'>OpenClassrooms</a>.</p>
                <hr/>
                <div className='home--profile--socialMedia'>
                    <a href='https://www.linkedin.com/in/mb-developer/' target='_blank' rel='noreferrer' title='linkedIn' aria-label='linkedIn'>
                        <img src={linkedIn} alt='LinkedIn Icon'/>
                    </a>
                    <a href='https://github.com/mbdev95' target='_blank' rel='noreferrer' title='GitHub' aria-label='GitHub'>
                        <img src={GitHub} alt='GitHub Icon'/>
                    </a>
                    <a href='https://drive.google.com/file/d/1n0NB2EoaBSwEKQFYxxccZPMg-a6-USHs/view?usp=sharing' target='_blank' rel='noreferrer' title='resume' aria-label='resume'>
                        <img src={resume} alt='Resume Icon'/>
                    </a>
                    <a href='mailto:mbucholski95@gmail.com' target='_blank' rel='noreferrer' title='email' aria-label='email'>
                        <img src={email} alt='Email Icon'/>
                    </a>
                </div>
                <hr/>
                <div className='home--profile--skills'>
                    <h2>Main Skills</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>REST APIs</li>
                        <li>MySQL</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>CSS3</li>
                        <li>Animations</li>
                        <li>HTML5</li>
                        <li>WordPress</li>
                    </ul>
                </div>
                <hr/>
                <p>&#169; mbdev95</p>
                <div className='home--profile--empty'></div>
            </div> 
        </>
    );
}

export default SideBar;