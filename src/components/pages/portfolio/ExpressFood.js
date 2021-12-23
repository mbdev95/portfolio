import mysqlLogo from '../../../img/programmingLogos/mysql.jpg';
import ExpressFoodMedium from '../../../img/applications/medium/ExpressFoodMedium.png';
import ExpressFoodLarge from '../../../img/applications/large/ExpressFoodLarge.png';
import { useContext } from 'react';
import { pageInfoContext } from '../../context';

const ExpressFood = () => {
    return (
        <div className='portfolio--project'>
            <h2>Express Food Database</h2>
            {useContext(pageInfoContext).projectPhotoSelector(<img src={mysqlLogo} alt='MySQL Logo'/>, <img src={ExpressFoodMedium} alt='Express Food UML Class Diagram'/>, <img src={ExpressFoodLarge} alt='Express Food UML Class Diagram'/>)}
            <p>I created a database for the fictitious food delivery company, ExpressFood, using UML diagrams and MySQL. Additionally, I queried my database using MySQL.</p>
            <h3>Skills Used:</h3>
            <ul>
                <li key={1}>MySQL</li>
                <li key={2}>UML Diagrams</li>
            </ul>
            <a href='https://github.com/mbdev95/OpenClassrooms-Project-4-Database-For-Express-Food/blob/master/README.md' target='_blank'><button type='button'>Application Explanation</button></a>
            <hr/>
        </div>
    );
}

export default ExpressFood;