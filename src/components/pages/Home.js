import SideBar from './homeSections/sideBar';
import ProjectsPreview from './homeSections/ProjectsPreview';

const Home = () => {

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