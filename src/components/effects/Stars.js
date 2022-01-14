import {useEffect, useContext, useState, useCallback} from 'react';
import {pageInfoContext} from '../context';

const Stars = () => {

    const starsCreator = useContext(pageInfoContext).starsCreator;
    const numberOfStars = useContext(pageInfoContext).numberOfStars;

    const [resizedViewportStars, setResizedViewportStars] = useState(null);

    window.addEventListener('resize', () => {
        setResizedViewportStars(starsCreator(document.documentElement.clientWidth, document.documentElement.clientHeight, true));
        starPosition();
        shooting();
    } )

    const shooting = useCallback(() => {
        for (let i = 1; i < numberOfStars(document.documentElement.clientWidth, document.documentElement.clientHeight) + 1; i++) {
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
            console.log('shooting function');
        } 
    }, [numberOfStars])

    const starPosition = useCallback(() => {
        const body = document.getElementsByTagName('BODY')[0];
        const html = document.getElementsByTagName('HTML')[0];
        const totalPageHeight = Math.max(html.scrollHeight, body.scrollHeight, html.clientHeight, body.offsetHeight, html.offsetHeight);
        console.log(totalPageHeight + ' ' + 'totalPageHeight for stars');
        for (let i = 1; i < numberOfStars(document.documentElement.clientWidth, document.documentElement.clientHeight) + 1; i++) {
            const starYLocation = Math.floor(Math.random() * totalPageHeight);
            console.log(starYLocation + ' ' + 'for star' + i);
            const star = document.getElementsByClassName(`star--${i}`)[0];
            star.style.setProperty('--percentage-below-top', starYLocation + 'px');
        }
    }, [numberOfStars])

    useEffect(() => {
        starPosition();
        const starRemoveStartTimeout = setTimeout(() => {
                for (let i = 1; i < numberOfStars(document.documentElement.clientWidth, document.documentElement.clientHeight) + 1; i++) {
                    const star = document.getElementsByClassName(`star--${i}`)[0];
                    star.classList.remove(`star--${i}__start-animation`);
                }
        }, 5500);
        const startShootingStar = setTimeout(shooting, 5600);
        return () => clearTimeout(starRemoveStartTimeout, startShootingStar);
    }, [numberOfStars, starPosition, shooting])

    return (
        <>
            <div  className='stars'>
                { resizedViewportStars ? resizedViewportStars : starsCreator(document.documentElement.clientWidth, document.documentElement.clientHeight, false) }
            </div>
        </>
    )
}

export default Stars;