import linkedIn from '../../../img/socialMediaIcons/linkedin.png';
import GitHub from '../../../img/socialMediaIcons/github.png';
import resume from '../../../img/socialMediaIcons/resume.png';
import {useEffect, useContext} from 'react';
import { pageInfoContext } from '../../context';
import {Link} from 'react-router-dom';

const SideBar = () => {

    const homeProfileHeight = () => {
        const body = document.getElementsByTagName('BODY')[0];
        const html = document.getElementsByTagName('HTML')[0];
        const totalPageHeight = Math.max(html.scrollHeight, body.scrollHeight, html.clientHeight, body.offsetHeight, html.offsetHeight);
        const homeHeaderHeight = document.getElementsByClassName('home--header')[0].offsetHeight;
        const minProfileHeight = Math.round((totalPageHeight * 0.9) - homeHeaderHeight);
        const homeProfile = document.getElementsByClassName('home--profile')[0];
        const homeProfileHeight = Math.max(homeProfile.scrollHeight, homeProfile.clientHeight, homeProfile.offsetHeight);
        if ( homeProfileHeight < minProfileHeight ) {
            console.log(homeProfileHeight);
            console.log(minProfileHeight);
            document.getElementsByClassName('home--profile')[0].style.setProperty('--min-home-profile-height', minProfileHeight + 'px');
            document.getElementsByClassName('home--profile')[0].style.setProperty('--justify-content-home-profile', 'space-evenly');
        }
    }

    const socialMediaIconsWidth = () => {
        const socialMediaWidth = document.getElementsByClassName('home--profile--socialMedia')[0].offsetWidth;
        if ( socialMediaWidth > 300 ) {
            document.getElementsByClassName('home--profile--socialMedia')[0].style.setProperty('--social-media-a-width', 10 + '%');
        }
    }

    useEffect(() => {
        socialMediaIconsWidth();
        homeProfileHeight();
    }, []);

    document.addEventListener('resize', () => homeProfileHeight());

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
                        <img src={linkedIn} alt='LinkedIn Logo'/>
                    </a>
                    <a href='https://github.com/mbdev95' target='_blank' rel='noreferrer'>
                        <img src={GitHub} alt='GitHub Logo'/>
                    </a>
                    <a href="https://drive.google.com/file/d/1n0NB2EoaBSwEKQFYxxccZPMg-a6-USHs/view?usp=sharing" target='_blank' rel='noreferrer'>
                        <img src={resume} alt='Resume Icon'/>
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