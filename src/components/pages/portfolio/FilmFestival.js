import cssLogo from '../../../img/programmingLogos/css.png';
import BrooklynBridgeFilmFestival from '../../../img/applications/BrooklynBridgeFilmFestival.png';
import { useContext } from 'react';
import { pageInfoContext } from '../../context';

const FilmFestival = () => {

    const context = useContext(pageInfoContext);

    return (
        <div className='portfolio--project' id='BrooklynBridgeFilmFestival' >
            <hr/>
            <h2>Brooklyn Bridge Film Festival</h2>
            {useContext(pageInfoContext).projectPhotoSelector(<img src={cssLogo} alt='CSS3 Logo' />, <img src={BrooklynBridgeFilmFestival} alt='Brooklyn Bridge Film Festival 3D Cubes' />, null)}
            <p>I created a marketing page for the fictitious Brooklyn Bridge Film Festival using HTML5, CSS3, and Bootstrap.</p>
            <h3>Skills Used:</h3>
            <ul>
                <li key={1}>CSS3</li>
                <li key={2}>Bootstrap</li>
                <li key={3}>HTML5</li>
            </ul>
            <a href='https://github.com/mbdev95/OpenClassrooms-Project-3-Brooklyn-Film-Festival/blob/master/README.md' target='_blank' rel='noreferrer'><button type='button'>Application Explanation</button></a>
            <a href='https://mbdev95.github.io/OpenClassrooms-Project-3-Brooklyn-Film-Festival/' target='_blank' rel='noreferrer'><button type='button'>Application Live</button></a>
        </div>
    )
}

export default FilmFestival;