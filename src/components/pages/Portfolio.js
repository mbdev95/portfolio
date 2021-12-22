import {useContext} from 'react';
import {pageInfoContext} from '../context';
import ExpressFood from './portfolio/ExpressFood';
import FilmFestival from './portfolio/FilmFestival';
import RandomQuotes from './portfolio/RandomQuotes';
import RestaurantReviewLocator from './portfolio/RestaurantReviewLocator';
import WarOfWeapons from './portfolio/WarOfWeapons';

const Portfolio = () => {

    const slide = useContext(pageInfoContext).slide;

    return (
        <div className='portfolio'>
            <h1>Mark's Portfolio</h1>
            <button type='button' onClick={(event) => slide(event.target.textContent.toLowerCase(), 'portfolio')}>Home</button>
            <button type='button' onClick={(event) => slide(event.target.textContent.toLowerCase(), 'portfolio')}>About</button>
            <hr/>
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