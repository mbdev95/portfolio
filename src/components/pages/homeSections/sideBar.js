import linkedIn from '../../../img/socialMediaIcons/linkedin.png';
import GitHub from '../../../img/socialMediaIcons/github.png';
import resume from '../../../img/socialMediaIcons/resume.png';
import {Link} from 'react-router-dom';

const SideBar = () => {

    return (
        <>
            <div className='home--header'>
                <h1>Mark Bucholski</h1>
                <Link to='/portfolio'><button type='button' >Portfolio</button></Link>
                <Link to='/about'><button type='button' >About</button></Link>
                <hr/>
            </div>
            <div className='home--profile'>
                <p>-- A Software engineer from a galaxy up north --</p>
                <hr/>
                <p>Educated with a diploma in Front-End Web Development from <a href='https://openclassrooms.com/en/about-us' target='_blank' rel='noreferrer'>OpenClassrooms</a>.</p>
                <hr/>
                <div className='home--profile--socialMedia'>
                    <a href='https://www.linkedin.com/in/mb-developer/' target='_blank' rel='noreferrer'><img src={linkedIn} alt='LinkedIn Logo'/></a>
                    <a href='https://github.com/mbdev95' target='_blank' rel='noreferrer'><img src={GitHub} alt='GitHub Logo'/></a>
                    <a href="https://drive.google.com/file/d/1n0NB2EoaBSwEKQFYxxccZPMg-a6-USHs/view?usp=sharing" target='_blank' rel='noreferrer'><img src={resume} alt='Resume Icon'/></a>
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
                    <hr/>
                </div>
                <p>&#169; mbdev95</p>
            </div> 
        </>
    );
}

export default SideBar;