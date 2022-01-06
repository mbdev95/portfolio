import { HashLink as Link } from 'react-router-hash-link';

const ProjectsPreview = () => {
    return (
        <div className='previewProjects' >
            <Link to='/portfolio'  >
                <div className='previewProjects--project--1' >
                    <h2>War of Weapons Board Game</h2>
                    <ul>
                        <li>Object-oriented JavaScript</li>
                        <li>jQuery</li>
                        <li>CSS Grid</li>
                    </ul>
                </div>
            </Link>
            <Link to='/portfolio#RestaurantReviewLocator' >
                <div className='previewProjects--project--2'>
                    <h2>Restaurant Review Locator</h2>
                    <ul>
                        <li>React</li>
                        <li>REST-APIs</li>
                    </ul>
                </div>
            </Link>
            <Link to='/portfolio#BrooklynBridgeFilmFestival' >
                <div className='previewProjects--project--3'>
                    <h2>Brooklyn Bridge Film Festival</h2>
                    <ul>
                        <li>Bootstrap</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                    </ul>
                </div>
            </Link>
            <Link to='/portfolio#ExpressFood' >
                <div className='previewProjects--project--4'>
                    <h2>Express Food Database</h2>
                    <ul>
                        <li>UML Diagrams</li>
                        <li>MySQL Database/Queries</li>
                    </ul>
                </div>
            </Link>
            <Link to='/portfolio#OrwellianRandomQuoteGenerator' >
                <div className='previewProjects--project--5'>
                    <h2>Orwellian Random Quote Generator</h2>
                    <ul>
                        <li>Vanilla JavaScript</li>
                        <li>Bootstrap</li>
                        <li>HTML5</li>
                    </ul>
                </div>
            </Link>
        </div>
    );
}

export default ProjectsPreview;