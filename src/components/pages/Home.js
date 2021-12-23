import {useEffect, useContext} from 'react';
import {pageInfoContext} from '../context';
import linkedIn from '../../img/socialMediaIcons/linkedin.png';
import GitHub from '../../img/socialMediaIcons/github.png';
import resume from '../../img/socialMediaIcons/resume.png';

const Home = () => {

    const slide = useContext(pageInfoContext).slide;

    useEffect(() => {
        setTimeout(() => slide('home', null), 6000);
    }, []);

    return (
        <>
            <div className='home'>
                <h1>Mark Bucholski</h1>
                <button type='button' onClick={event => slide(event.target.textContent.toLowerCase(), 'home')}>Portfolio</button>
                <button type='button' onClick={event => slide(event.target.textContent.toLowerCase(), 'home')}>About</button>
                <hr/>
                <div className='home--profile'>
                    <p>-- A Software engineer from a galaxy up north --</p>
                    <hr/>
                    <p>Educated with a diploma in Front-End Web Development from <a href='https://openclassrooms.com/en/about-us' target='_blank'>OpenClassrooms</a>.</p>
                    <hr/>
                    <div className='home--socialMedia'>
                        <a href='https://www.linkedin.com/in/mb-developer/' target='_blank'><img src={linkedIn} alt='LinkedIn Logo'/></a>
                        <a href='https://github.com/mbdev95' target='_blank'><img src={GitHub} alt='GitHub Logo'/></a>
                        <a href="https://drive.google.com/file/d/1n0NB2EoaBSwEKQFYxxccZPMg-a6-USHs/view?usp=sharing" target='_blank'><img src={resume} alt='Resume Icon'/></a>
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
                        <p>&#169; mbdev95</p>
                    </div>
                    <div className='previewProjects'>
                        <div className='previewProjects--project'>
                            <h2>War of Weapons Board Game</h2>
                            <ul>
                                <li>Object-oriented JavaScript</li>
                                <li>jQuery</li>
                                <li>CSS Grid</li>
                            </ul>
                        </div>
                        <div className='previewProjects--project'>
                            <h2>Restaurant Review Locator</h2>
                            <ul>
                                <li>React</li>
                                <li>REST-APIs</li>
                            </ul>
                        </div>
                        <div className='previewProjects--project'>
                            <h2>Brooklyn Bridge Film Festival</h2>
                            <ul>
                                <li>Bootstrap</li>
                                <li>CSS3</li>
                                <li>HTML5</li>
                            </ul>
                        </div>
                        <div className='previewProjects--project'>
                            <h2>Express Food Database</h2>
                            <ul>
                                <li>UML Diagrams</li>
                                <li>MySQL Database and Queries</li>
                            </ul>
                        </div>
                        <div className='previewProjects--project'>
                            <h2>Orwellian Random Quote Generator</h2>
                            <ul>
                                <li>Vanilla JavaScript</li>
                                <li>Bootstrap</li>
                                <li>HTML5</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;