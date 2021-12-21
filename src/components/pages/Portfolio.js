import {useContext} from 'react';
import {pageInfoContext} from '../context';

const Portfolio = () => {

    const slide = useContext(pageInfoContext).slide;

    return (
        <div className="portfolio">
            <h1>This is the Portfolio Page</h1>
            <button type="button" onClick={(event) => slide(event.target.textContent.toLowerCase(), 'portfolio')}>Home</button>
            <button type="button" onClick={(event) => slide(event.target.textContent.toLowerCase(), 'portfolio')}>About</button>
        </div>
    );
}

export default Portfolio;