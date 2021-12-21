import {useEffect, useContext} from "react";
import {pageInfoContext} from '../context';

const Home = () => {

    const slide = useContext(pageInfoContext).slide;

    useEffect(() => {
        setTimeout(() => slide('home', null), 6000);
    }, []);

    return (
        <>
            <div className="home">
                <h1>This is the Home Page</h1>
                <button type="button" onClick={event => slide(event.target.textContent.toLowerCase(), 'home')}>Portfolio</button>
                <button type="button" onClick={event => slide(event.target.textContent.toLowerCase(), 'home')}>About</button>
            </div>
        </>
    )
}

export default Home;