import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import ExpressFood from './portfolio/ExpressFood';
import FilmFestival from './portfolio/FilmFestival';
import RandomQuotes from './portfolio/RandomQuotes';
import RestaurantReviewLocator from './portfolio/RestaurantReviewLocator';
import WarOfWeapons from './portfolio/WarOfWeapons';

const Portfolio = () => {

    const projectHeightCalculator = () => {
        const portfolioHeaderHeight = document.querySelector('.portfolio--header').offsetHeight;
        const portolioHeight = document.querySelector('.portfolio').offsetHeight;
        const projectHeightPercentage = 100 - ((portfolioHeaderHeight / portolioHeight) * 100);
        document.querySelector('.projects').style.setProperty('--project-height', projectHeightPercentage + '%');
    }

    useEffect(() => {
        projectHeightCalculator();
    }, [] );

    return (
        <div className='portfolio'>
            <div className='portfolio--header'>
                <h1>Mark's Portfolio</h1>
                <Link exact='true' to='/' ><button type='button' >Home</button></Link>
                <Link to='/about'><button type='button' >About</button></Link>
                <hr/>
            </div>
            <div className='projects'>
                <WarOfWeapons />
                <RestaurantReviewLocator /> 
                <FilmFestival />
                <ExpressFood />
                <RandomQuotes />
            </div>
        </div>
    );
}

export default Portfolio;