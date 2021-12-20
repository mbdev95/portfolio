import react, {useEffect} from "react";

const Home = () => {

    const homeSlideIn = () => {
        document.getElementsByClassName('home')[0].classList.add('home__translateXIn');
    }

    const homeSlideOut = () => {
        document.getElementsByClassName('home')[0].classList.remove('home__translateXIn');
        document.getElementsByClassName('home')[0].classList.add('home__translateXOut');
        setTimeout(() => {
            document.getElementsByClassName('home')[0].classList.remove('home__translateXOut');
        }, 4000);
    }

    const aboutSlideIn = () => {
        homeSlideOut();
        document.getElementsByClassName('about')[0].classList.add('about__translateXIn');
    }

    useEffect(() => {
        setTimeout(() => homeSlideIn(), 5500);
    }, []);

    return (
        <>
            <div className="home">
                <h1>This is the Home Page</h1>
                <button type="button" onClick={() => ''}>Portfolio</button>
                <button type="button" onClick={() => aboutSlideIn() }>About</button>
            </div>
        </>
    )
}

export default Home;