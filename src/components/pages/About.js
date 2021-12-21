const About = (props) => {
    return (
        <div className="about">
            <h1>This is the About Page</h1>
            <button type="button" onClick={event => props.slide(event.target.textContent.toLowerCase(), 'about')}>Home</button>
            <button type="button" onClick={event => props.slide(event.target.textContent.toLowerCase(), 'about')}>Portfolio</button>
        </div>
    )
}

export default About;