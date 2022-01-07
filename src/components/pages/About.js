import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <div className='about--header'>
                <h1>About Mark</h1>
                <div className='about--header--nav'>
                    <Link exact='true' to='/'><button type="button" >Home</button></Link>
                    <Link to='/portfolio'><button type="button" >Portfolio</button></Link>
                </div>
            </div>
            <div className='about--main'>
                <hr/>
                <br/>
                <p>This is the start of the about section...</p>
            </div>
        </div>
    )
}

export default About;