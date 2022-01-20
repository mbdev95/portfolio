import linkedIn from '../../../img/socialMediaIcons/linkedin.png';
import GitHub from '../../../img/socialMediaIcons/github.png';
import resume from '../../../img/socialMediaIcons/resume.png';
import email from '../../../img/socialMediaIcons/email.png';
import {useEffect, useContext} from 'react';
import { pageInfoContext } from '../../context';
import {Link} from 'react-router-dom';

const SideBar = () => {

    const socialMediaIconsWidth = () => {
        const socialMediaWidth = document.getElementsByClassName('home--profile--socialMedia')[0].offsetWidth;
        if ( socialMediaWidth > 300 ) {
            document.getElementsByClassName('home--profile--socialMedia')[0].style.setProperty('--social-media-a-width', 10 + '%');
        }
    }

    const homeProfileHeight = () => {
        // console.log('v');
        const home = document.getElementsByClassName('home')[0].getBoundingClientRect();
        const homeHeader = document.getElementsByClassName('home--header')[0].getBoundingClientRect();
        const homeProfile = document.getElementsByClassName('home--profile')[0].getBoundingClientRect();
        const homeProfileHeight = home.height - homeHeader.height;
        if ( home.bottom > homeProfile.bottom ) {
            // console.log('h');
            document.getElementsByClassName('home--profile')[0].style.setProperty('--min-home-profile-height', homeProfileHeight + 'px');
            document.getElementsByClassName('home--profile')[0].style.setProperty('--justify-content-home-profile', 'space-evenly');
        }
    }

    window.onresize = () => homeProfileHeight();

    useEffect(() => {
        socialMediaIconsWidth();
        const homeProfileHeightTimeout = setTimeout(() => homeProfileHeight(), 250);
        return () => clearTimeout(homeProfileHeightTimeout);
    }, []);

    // useEffect(() => {
    //     document.addEventListener('resize', homeProfileHeight());
    //     return () => document.removeEventListener('resize', homeProfileHeight());
    // })

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
                    <a href='https://www.linkedin.com/in/mb-developer/' target='_blank' rel='noreferrer'>
                        <img src={linkedIn} alt='LinkedIn Icon'/>
                    </a>
                    <a href='https://github.com/mbdev95' target='_blank' rel='noreferrer'>
                        <img src={GitHub} alt='GitHub Icon'/>
                    </a>
                    <a href='https://drive.google.com/file/d/1n0NB2EoaBSwEKQFYxxccZPMg-a6-USHs/view?usp=sharing' target='_blank' rel='noreferrer'>
                        <img src={resume} alt='Resume Icon'/>
                    </a>
                    <a href='mailto:mbucholski95@gmail.com' target='_blank' rel='noreferrer'>
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
            </div> 
        </>
    );
}

export default SideBar;