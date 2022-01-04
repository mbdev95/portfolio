import SideBar from './homeSections/sideBar';
import ProjectsPreview from './homeSections/ProjectsPreview';
import {useEffect, useContext} from 'react';
import {pageInfoContext} from '../context';

const Home = () => {

    const firstSlide = useContext(pageInfoContext).firstSlide;

    const homeProfileHeight = () => {
        const homeHeight = document.getElementsByClassName('home')[0].offsetHeight;
        const homeHeaderHeight = document.getElementsByClassName('home--header')[0].offsetHeight;
        const homeProfileHeight = homeHeight - homeHeaderHeight;
        document.getElementsByClassName('home')[0].style.setProperty('--home-profile-height', homeProfileHeight + 'px');
    }

    useEffect(() => {
        homeProfileHeight();
        // setTimeout(() => firstSlide('home'), 6000);    
    }, []);

    document.addEventListener('resize', () => homeProfileHeight());

    return (
        <>
            <div className='home'>
                <SideBar /> 
                <ProjectsPreview />
            </div>

        </>
    );
}

export default Home;