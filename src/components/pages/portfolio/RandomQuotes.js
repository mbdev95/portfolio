import html5Logo from '../../../img/programmingLogos/html.png';
import RandomQuotationGenerator from '../../../img/applications/RandomQuotationGenerator.png';
import { useContext } from 'react';
import { pageInfoContext } from '../../context';

const RandomQuotes = () => {

    const context = useContext(pageInfoContext);

    return (
        <div className='portfolio--project' id='OrwellianRandomQuoteGenerator' >
            <hr/>
            <h2>Orwellian Randon Quotation Generator</h2>
            {useContext(pageInfoContext).projectPhotoSelector(<img src={html5Logo} alt='HTML5 Logo'/>, <img src={RandomQuotationGenerator} alt='Orwellian Random Quotation Generator'/>, null)}
            <p>The Orwellian Random Quotation Generator was developed using JavaScript logic to randomly select from a series of quotes in either 'Animal Farm' or '1984'.</p>
            <h3>Skills Used:</h3>
            <ul>
                <li key={1}>JavaScript</li>
                <li key={2}>CSS3</li>
                <li key={3}>Bootstrap</li>
                <li key={4}>HTML5</li>
            </ul>
            <a href='https://github.com/mbdev95/OpenClassrooms-Project-5-Orwellian-Quotation-Generator/blob/master/README.md' target='_blank' rel='noreferrer'><button type='button'>Application Explanation</button></a>
            <a href='https://mbdev95.github.io/OpenClassrooms-Project-5-Orwellian-Quotation-Generator/' target='_blank' rel='noreferrer'><button type='button'>Application Live</button></a>
        </div>
    );
}

export default RandomQuotes;