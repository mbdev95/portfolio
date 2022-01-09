import React, {useState} from 'react';
import linkedIn from '../../img/socialMediaIcons/linkedin.png';
import GitHub from '../../img/socialMediaIcons/github.png';
import resume from '../../img/socialMediaIcons/resume.png';

export const pageInfoContext = React.createContext();

export const Provider = (props) => {
    
    const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);
    window.addEventListener('resize', () => setViewportWidth(document.documentElement.clientWidth) );
    
    const isLargeViewport = () => { 
        if ( viewportWidth >= 1025 ) {
            return true;
        } else {
            return false;
        }
    }

    const projectPhotoSelector = (logoImage, applicationImageMedium, applicationImageLarge) => {
        if ( ( viewportWidth >= 768 && viewportWidth < 1200 ) || ( applicationImageLarge === null && viewportWidth >= 768 ) ) {
            return applicationImageMedium;
        } else if ( viewportWidth >= 1200 && applicationImageLarge !== null ) {
            return applicationImageLarge
        } 
        return logoImage;
    }

    const h1Text = (page) => {
        const body = document.getElementsByTagName('BODY')[0];
        const html = document.getElementsByTagName('HTML')[0];
        const totalPageWidth = Math.max(html.scrollWidth, body.scrollWidth, html.clientWidth, body.offsetWidth, html.offsetWidth);
        if (totalPageWidth > 400 && page === 'home') {
            return <h1>Mark Bucholski</h1>
        } else if (totalPageWidth < 400 && page === 'home') {
            return <h1>Mark</h1>
        } else if (totalPageWidth > 420 && page === 'portfolio') {
            return <h1>Mark's Portfolio</h1>
        } else if (totalPageWidth < 420 && page === 'portfolio') {
            return <h1>Portfolio</h1>
        } else if (totalPageWidth > 315 && page === 'about') {
            return <h1>About Mark</h1>
        } else {
            return <h1>About</h1>
        }
    }

    const socialMediaInHeader = (page) => {
        const body = document.getElementsByTagName('BODY')[0];
        const html = document.getElementsByTagName('HTML')[0];
        const totalPageWidth = Math.max(html.scrollWidth, body.scrollWidth, html.clientWidth, body.offsetWidth, html.offsetWidth);
        if ( totalPageWidth > 1024 ) {
            return (
                <div className={`${page}--header--socialMedia`}>
                    <a href='https://www.linkedin.com/in/mb-developer/' target='_blank' rel='noreferrer'>
                        <img src={linkedIn} alt='LinkedIn Logo'/>
                    </a>
                    <a href='https://github.com/mbdev95' target='_blank' rel='noreferrer'>
                        <img src={GitHub} alt='GitHub Logo'/>
                    </a>
                    <a href="https://drive.google.com/file/d/1n0NB2EoaBSwEKQFYxxccZPMg-a6-USHs/view?usp=sharing" target='_blank' rel='noreferrer'>
                        <img src={resume} alt='Resume Icon'/>
                    </a>
                </div>
            );
        }
    }

    return (
        <>
            <pageInfoContext.Provider value={ {
                numberOfStars: 250,
                projectPhotoSelector: projectPhotoSelector,
                isLargeViewport: isLargeViewport(),
                h1Text: h1Text,
                socialMediaInHeader: socialMediaInHeader
            } }>
                {props.children}
            </pageInfoContext.Provider>
        </>
    );
}

