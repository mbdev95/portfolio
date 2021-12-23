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
                <h2>Mark Bucholski</h2>
                <p>Software engineer from a galaxy up north</p>
                <p>Educated with a diploma in front-end web development and being a self-learner.</p>
                <div className='socialMedia'>
                    <img src={linkedIn} alt='LinkedIn Logo'/>
                    <img src={GitHub} alt='GitHub Logo'/>
                    <img src={resume} alt='Resume Icon'/>
                </div>
                <button type='button' onClick={event => slide(event.target.textContent.toLowerCase(), 'home')}>Portfolio</button>
                <button type='button' onClick={event => slide(event.target.textContent.toLowerCase(), 'home')}>About</button>
            </div>
        </>
    )
}

export default Home;