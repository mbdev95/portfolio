import React, {useState} from 'react';

export const pageInfoContext = React.createContext();

export const Provider = (props) => {

    const pageSlide = (pageIn, pageOut) => {
        if (pageOut === null) {
          document.getElementsByClassName(pageIn)[0].classList.add(`${pageIn}__translateXIn`); 
        } else {
            document.getElementsByClassName(pageIn)[0].classList.add(`${pageIn}__translateXIn`);
            document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXIn`);
            document.getElementsByClassName(pageOut)[0].classList.add(`${pageOut}__translateXOut`);
            if ( viewportWidth >= 1025 )
                setTimeout(() => {
                    document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXOut`);
                }, 2000); 
            else {
                setTimeout(() => {
                    document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXOut`);
                }, 1000); 
            }
        }
    }

    const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);
    window.addEventListener('resize', () => setViewportWidth(document.documentElement.clientWidth) );

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
                pageSlide: pageSlide,
                projectPhotoSelector: projectPhotoSelector
            } }>
                {props.children}
            </pageInfoContext.Provider>
        </>
    );
}

