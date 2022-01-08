import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { pageInfoContext } from '../context';

const About = () => {

    const h1Text = useContext(pageInfoContext).h1Text;

    return (
        <div className="about">
            <div className='about--header'>
                {h1Text('about')}
                <div className='about--header--nav'>
                    <Link exact='true' to='/'><button type="button" >Home</button></Link>
                    <Link to='/portfolio'><button type="button" >Portfolio</button></Link>
                </div>
            </div>
            <div className='about--main'>
                <hr/>
                <p>This is the start of the about section...</p>
                <p>Hi my name is Mark!</p>
            </div>
        </div>
    )
}

export default About;