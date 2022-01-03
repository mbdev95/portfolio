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
                }, 1000); 
            else {
                setTimeout(() => {
                    document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXOut`);
                }, 500); 
            }
        }
    }

    // const  isInViewport = element => {
    //     const rect = element.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }
    

    // window.addEventListener('popstate', (e) => {
    //     if ( e.state !== null ) {
    //         let newPage = window.location.pathname.slice(1);
    //         console.log(newPage);
    //         let oldPage = '';
    //         const home = document.getElementsByClassName('home')[0];
    //         const portfolio = document.getElementsByClassName('portfolio')[0];
    //         if ( isInViewport(home) === true ) {
    //             oldPage = 'home';
    //         } else if ( isInViewport(portfolio) === true ) {
    //             oldPage = 'portfolio';
    //         } else {
    //             oldPage = 'about';
    //         }
    //         pageSlide(newPage, oldPage);
    //     }
    // });

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

