const About = () => {

    const aboutSlideOut = () => {
        document.getElementsByClassName('about')[0].classList.remove('about__translateXIn');
        document.getElementsByClassName('about')[0].classList.add('about__translateXOut');
        setTimeout(() => {
            document.getElementsByClassName('about')[0].classList.remove('about__translateXOut');
        }, 4000);
    }

    const homeSlideIn = () => {
        aboutSlideOut();
        document.getElementsByClassName('home')[0].classList.add('home__translateXIn');
    }

    return (
        <div className="about">
            <h1>This is the About Page</h1>
            <button type="button" onClick={() => homeSlideIn()}>Home</button>
            <button type="button">Portfolio</button>
        </div>
    )
}

export default About;