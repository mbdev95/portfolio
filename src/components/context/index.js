import React, {useState} from 'react';

export const pageInfoContext = React.createContext();

export const Provider = (props) => {

    const relativeSlide = (pageIn, pageOut, hashLink) => {
        window.history.pushState({id: window.history.length}, '', `/${pageIn}${hashLink}`);
        document.getElementsByClassName(pageIn)[0].classList.add(`${pageIn}__translateXIn`);
        document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXIn`);
        document.getElementsByClassName(pageOut)[0].classList.add(`${pageOut}__translateXOut`);
        if ( viewportWidth >= 1025 )
            setTimeout(() => {
                document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXOut`);
            }, 1000); 
        else {
            setTimeout(() => {
                document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXOut`);
            }, 500); 
        }
    }
    
    const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);
    window.addEventListener('resize', () => setViewportWidth(document.documentElement.clientWidth) );

    window.onpopstate = e => e.preventDefault();
    
    const isLargeViewport = () => { 
        if ( viewportWidth >= 1025 ) {
            return true;
        } else {
            return false;
        }
    }

    const projectPhotoSelector = (logoImage, applicationImageMedium, applicationImageLarge) => {
        if ( viewportWidth >= 768 && viewportWidth < 1200 || applicationImageLarge === null && viewportWidth >= 768 ) {
            return applicationImageMedium;
        } else if ( viewportWidth >= 1200 && applicationImageLarge !== null ) {
            return applicationImageLarge
        } 
        return logoImage;
    }

    return (
        <>
            <pageInfoContext.Provider value={{
                numberOfStars: 250,
                projectPhotoSelector: projectPhotoSelector,
                isLargeViewport: isLargeViewport(),
                relativeSlide: relativeSlide
            } }>
                {props.children}
            </pageInfoContext.Provider>
        </>
    );
}

