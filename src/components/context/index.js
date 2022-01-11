import React, {useState, useEffect} from 'react';
import linkedIn from '../../img/socialMediaIcons/linkedin.png';
import GitHub from '../../img/socialMediaIcons/github.png';
import resume from '../../img/socialMediaIcons/resume.png';

export const pageInfoContext = React.createContext();

export const Provider = (props) => {
    
    const viewportWidth = document.documentElement.clientWidth;

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

    const numberOfStars = (vw) => {
        let numberOfStars = 0;
        if ( vw < 480 ) {
            numberOfStars = 60;
        } else if ( vw >= 480 && vw <= 768 ) {
            numberOfStars = 115;
        } else if ( vw > 768 && vw <= 1025 ) {
            numberOfStars = 170;
        } else {
            numberOfStars = 250;
        }
        return numberOfStars;
    }

    const starsCreator = (vw, isResized) => {
        let stars = [];
        for (let i = 1; i < numberOfStars(vw) + 1; i++) {
            isResized ? stars.push(<div className={`star--${i}`} key={i}></div>) : stars.push(<div className={`star--${i} star--${i}__start-animation`} key={i}></div>);
        }
        return stars;
    }

    return (
        <>
            <pageInfoContext.Provider value={ {
                numberOfStars: numberOfStars,
                projectPhotoSelector: projectPhotoSelector,
                isLargeViewport: isLargeViewport(),
                h1Text: h1Text,
                socialMediaInHeader: socialMediaInHeader,
                starsCreator: starsCreator,
                numberOfStars: numberOfStars
            } }>
                {props.children}
            </pageInfoContext.Provider>
        </>
    );
}

