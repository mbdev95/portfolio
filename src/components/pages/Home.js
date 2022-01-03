import SideBar from './homeSections/sideBar';
import ProjectsPreview from './homeSections/ProjectsPreview';
import {useEffect, useContext} from 'react';
import {pageInfoContext} from '../context';

const Home = () => {

    const pageSlide = useContext(pageInfoContext).pageSlide;

    const homeProfileHeight = () => {
        const homeHeight = document.getElementsByClassName('home')[0].offsetHeight;
        const homeHeaderHeight = document.getElementsByClassName('home--header')[0].offsetHeight;
        const homeProfileHeight = homeHeight - homeHeaderHeight;
        document.getElementsByClassName('home')[0].style.setProperty('--home-profile-height', homeProfileHeight + 'px');
    }

    useEffect(() => {
        homeProfileHeight();
        setTimeout(() => pageSlide('home', null), 6000);    
    }, [pageSlide]);

    document.addEventListener('resize', () => homeProfileHeight());

    return (
        <>
            <div className='home' id='home'>
                <SideBar /> 
                <ProjectsPreview />
            </div>

        </>
    );
}

export default Home;