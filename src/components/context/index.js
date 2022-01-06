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

    return (
        <>
            <pageInfoContext.Provider value={{
                numberOfStars: 250,
                projectPhotoSelector: projectPhotoSelector,
                isLargeViewport: isLargeViewport(),
            } }>
                {props.children}
            </pageInfoContext.Provider>
        </>
    );
}

