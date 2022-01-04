import React, {useState, useRef} from 'react';

export const pageInfoContext = React.createContext();

export const Provider = (props) => {

    // const [pageOut, setPageOut] = useState('home');

    // const pageSlide = (pageIn, firstPage) => {
    //     if ( document.getElementsByClassName(pageIn)[0] === undefined ) {
    //         return null;
    //     }
    //     if (firstPage === null) {
    //         document.getElementsByClassName(pageIn)[0].classList.add(`${pageIn}__translateXIn`); 
    //     } else {
    //         document.getElementsByClassName(pageIn)[0].classList.add(`${pageIn}__translateXIn`);
    //         console.log(document.getElementsByClassName(pageOut)[0]);
    //         document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXIn`);
    //         document.getElementsByClassName(pageOut)[0].classList.add(`${pageOut}__translateXOut`);
    //         if ( viewportWidth >= 1025 )
    //             setTimeout(() => {
    //                 document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXOut`);
    //             }, 1000); 
    //         else {
    //             setTimeout(() => {
    //                 document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXOut`);
    //             }, 500); 
    //         }
    //     }
    //     setPageOut(pageIn);
    // }


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

    // const firstSlide = (firstPage) => {
    //     document.getElementsByClassName(firstPage)[0].style.transition = 'transform 0.75s ease-out';   
    //     document.getElementsByClassName(firstPage)[0].style.transform = 'translateX(90vw)';
    // }

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
                // firstSlide: firstSlide,
                projectPhotoSelector: projectPhotoSelector,
                isLargeViewport: isLargeViewport(),
            } }>
                {props.children}
            </pageInfoContext.Provider>
        </>
    );
}

