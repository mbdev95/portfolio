import react, {useEffect} from "react";

const Home = (props) => {

    useEffect(() => {
        setTimeout(() => props.slide('home', null), 5500);
    }, []);

    return (
        <>
            <div className="home">
                <h1>This is the Home Page</h1>
                <button type="button" onClick={event => props.slide(event.target.textContent.toLowerCase(), 'home')}>Portfolio</button>
                <button type="button" onClick={event => props.slide(event.target.textContent.toLowerCase(), 'home')}>About</button>
            </div>
        </>
    )
}

export default Home;