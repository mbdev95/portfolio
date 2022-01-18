import {useEffect, useContext, useState} from 'react';
import { pageInfoContext } from '../context';
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

    const context = useContext(pageInfoContext);

    return (
        <div className='portfolio'>
            <div className='portfolio--header'>
                {context.h1Text('portfolio')}
                {context.socialMediaInHeader('portfolio')}
                <nav className='portfolio--header--nav'>
                    <Link exact='true' to='/' ><button type='button' >Home</button></Link>
                    <Link to='/about'><button type='button' >About</button></Link>
                </nav>
            </div>
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