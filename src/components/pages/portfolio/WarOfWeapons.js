import javascriptLogo from '../../../img/programmingLogos/javascript.png';
import WarOfWeaponsMedium from '../../../img/applications/medium/WarOfWeaponsMedium.png';
import WarOfWeaponsLarge from '../../../img/applications/large/WarOfWeaponsLarge.png';
import { useContext } from 'react';
import { pageInfoContext } from '../../context';

const WarOfWeapons = () => {
    return (
        <div className='portfolio--project' id='portfolio'>
            <h2>War of Weapons Board Game</h2>
            {useContext(pageInfoContext).projectPhotoSelector(<img src={javascriptLogo} alt='javascript logo'/>, <img src={WarOfWeaponsMedium} alt='War of Weapons Board Game'/>, <img src={WarOfWeaponsLarge} alt='War of Weapons Game'/>)}
            <p>The board game was created using object-oriented JavaScript and jQuery.  The board game involves players moving over a css grid board, and collecting a weapon which will inflict a certain amount of damage. Once the two players meet on the board they will fight, having a choice to defend or attack.  The player with the weapon that inflicts the most damage will win.</p>
            <h3>Skills Used:</h3>
            <ul>
                <li key={1}>Object-Oriented JavaScript</li>
                <li key={2}>jQuery</li>
                <li key={3}>CSS Grid</li>
                <li key={4}>CSS3</li>
                <li key={5}>Bootstrap</li>
                <li key={6}>HTML5</li>
            </ul>
            <a href='https://github.com/mbdev95/OpenClassrooms-Project-6-War-Of-Weapons-Board-Game/blob/master/README.md' target='_blank'><button type='button'>Application Explanation</button></a>
            <a href='https://mbdev95.github.io/OpenClassrooms-Project-6-War-Of-Weapons-Board-Game/' target='_blank'><button type='button'>Application Live</button></a>
            <hr/>
        </div>
    );
}

export default WarOfWeapons;