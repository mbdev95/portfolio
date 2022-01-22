import {useEffect, useContext, useCallback} from 'react';
import {pageInfoContext} from '../context';

const Stars = () => {

    const starsCreator = useContext(pageInfoContext).starsCreator;
    const numberOfStars = useContext(pageInfoContext).numberOfStars;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

// The stars are repositioned as the page is resized to avoid the stars not completely filling the vertical space if excess height occurs during resizing.
    window.addEventListener('resize', () => starPosition(numberOfStars(document.documentElement.clientWidth, document.documentElement.clientHeight), document.documentElement.clientHeight));

// Random values are generated and passed to CSS to give stars varying speeds and scaling creating diverse shooting and twinkling effects.
    const shooting = useCallback(() => {
        for (let i = 1; i < numberOfStars(clientWidth, clientHeight) + 1; i++) {
            const randomStarSpeed = Math.floor(Math.random() * 25) + 5;
            const randomStarDelay = Math.floor(Math.random() * 10);
            const randomTwinkleSpeed = Math.floor(Math.random() * 7) + 2;
            const randomTwinkleDelay = Math.floor(Math.random() * 30) + 0.5;
            const star = document.getElementsByClassName(`star--${i}`)[0];
            star.classList.add(`star--${i}__shooting`);
            star.style.setProperty(`--star-speed`, randomStarSpeed + 's');
            star.style.setProperty(`--star-delay`, randomStarDelay + 's');
            star.style.setProperty(`--twinkle-speed`, randomTwinkleSpeed + 's');
            star.style.setProperty(`--twinkle-delay`, randomTwinkleDelay + 's');
        } 
    }, [clientWidth, clientHeight, numberOfStars])

// The distance below the top of viewport for each star is randomly generated and passed to CSS giving each star a unique position.  The left offset is generated in CSS for the opening animation.
    const starPosition = useCallback((numberOfStars, clientHeight) => {
        for (let i = 1; i < numberOfStars + 1; i++) {
            const starYLocation = Math.floor(Math.random() * clientHeight);
            const star = document.getElementsByClassName(`star--${i}`)[0];
            if ( star ) {
                star.style.setProperty('--percentage-below-top', starYLocation + 'px');
            }
        }
    }, [])

// The stars are position on page load for the opening animation.
// After the opening animation the class causing the opening star animation is removed and the shooting star animation class is added.
    useEffect(() => {
        starPosition(numberOfStars(clientWidth, clientHeight), clientHeight);
        const starRemoveStartTimeout = setTimeout(() => {
                for (let i = 1; i < numberOfStars(clientWidth, clientHeight) + 1; i++) {
                    const star = document.getElementsByClassName(`star--${i}`)[0];
                    star.classList.remove(`star--${i}__start-animation`);
                }
        }, 5400);
        const startShootingStar = setTimeout(shooting, 5500);
        return () => clearTimeout(starRemoveStartTimeout, startShootingStar);
    }, [ clientWidth, clientHeight, numberOfStars, starPosition, shooting])

    return (
        <>
            <div  className='stars'>
                { starsCreator(clientWidth, clientHeight) }
            </div>
        </>
    )
}

export default Stars;