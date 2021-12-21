import React from 'react';

export const pageInfoContext = React.createContext();

export const Provider = (props) => {

    const slide = (pageIn, pageOut) => {
        if (pageOut === null) {
          document.getElementsByClassName(pageIn)[0].classList.add(`${pageIn}__translateXIn`); 
        } else {
            document.getElementsByClassName(pageIn)[0].classList.add(`${pageIn}__translateXIn`);
            document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXIn`);
            document.getElementsByClassName(pageOut)[0].classList.add(`${pageOut}__translateXOut`);
            setTimeout(() => {
                document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXOut`);
            }, 2000);
        }
    }

    return (
        <>
            <pageInfoContext.Provider value={{
                numberOfStars: 250,
                slide: slide
            } }>
                {props.children}
            </pageInfoContext.Provider>
        </>
    );
}

