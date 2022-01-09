import reactLogo from '../../../img/programmingLogos/react.png';
import restaurantReviewLocatorMedium from '../../../img/applications/medium/RestaurantReviewLocatorMedium.png';
import restaurantReviewLocatorLarge from '../../../img/applications/large/RestaurantReviewLocatorLarge.png';
import { useContext } from 'react';
import { pageInfoContext } from '../../context';

const RestaurantReviewLocator = () => {
    return (
        <div className='portfolio--project' id='RestaurantReviewLocator' >
            <hr/>
            <h2>Restaruant Review Locator</h2>
            {useContext(pageInfoContext).projectPhotoSelector(<img src={reactLogo} alt='react logo'/>, <img src={restaurantReviewLocatorMedium} alt='Restaurant Review Locator Application'/>, <img src={restaurantReviewLocatorLarge} alt='Restaurant Review Locator Application' />)}
            <p>I developed a Restarant Review Locator application using React and Google Maps' APIs.  The Google Maps' APIs retrieved an array of restaurant and review data which was communicated throughout the application using React.</p>
            <h3>Skills Used:</h3>
            <ul>
                <li key={1}>React</li>
                <li key={2}>REST-APIs</li>
                <li key={3}>CSS3</li>
                <li key={4}>Bootstrap</li>
                <li key={5}>HTML5</li>
            </ul>
            <div className='portfolio--project--githubLinks'>
                <a href='https://github.com/mbdev95/OpenClassrooms-Project-7-Restaurant-Review-App/blob/master/README.md' target='_blank' rel='noreferrer'>
                    <button type='button'>Application Explanation</button>
                </a>
                <a href='https://mbdev95.github.io/OpenClassrooms-Project-7-Restaurant-Review-App/' target='_blank' rel='noreferrer'>
                    <button type='button'>Application Live</button>
                </a>
            </div>
        </div>
    );
}

export default RestaurantReviewLocator;