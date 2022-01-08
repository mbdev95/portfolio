import React, {useState} from 'react';

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

    return (
        <>
            <pageInfoContext.Provider value={ {
                numberOfStars: 250,
                projectPhotoSelector: projectPhotoSelector,
                isLargeViewport: isLargeViewport(),
                h1Text: h1Text
            } }>
                {props.children}
            </pageInfoContext.Provider>
        </>
    );
}

