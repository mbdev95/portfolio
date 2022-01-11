import {useEffect, useContext, useState} from 'react';
import {pageInfoContext} from '../context';

const Stars = () => {

    const starsCreator = useContext(pageInfoContext).starsCreator;
    const numberOfStars = useContext(pageInfoContext).numberOfStars;

    const [resizedViewportStars, setResizedViewportStars] = useState(null);

    window.onresize = () => {
        setResizedViewportStars(starsCreator(document.documentElement.clientWidth, true));
        starPosition();
        shooting();
    } 

    const shooting = () => {
        for (let i = 1; i < numberOfStars(document.documentElement.clientWidth) + 1; i++) {
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
    }

    const starPosition = () => {
        const body = document.getElementsByTagName('BODY')[0];
        const html = document.getElementsByTagName('HTML')[0];
        const totalPageHeight = Math.max(html.scrollHeight, body.scrollHeight, html.clientHeight, body.offsetHeight, html.offsetHeight);
        for (let i = 1; i < numberOfStars(document.documentElement.clientWidth) + 1; i++) {
            const pageHeight = Math.floor(Math.random() * totalPageHeight);
            const star = document.getElementsByClassName(`star--${i}`)[0];
            star.style.setProperty('--percentage-below-top', pageHeight + 'px');
        }
    }

    useEffect(() => {
        starPosition();
        setTimeout(() => {
            for (let i = 1; i < numberOfStars(document.documentElement.clientWidth) + 1; i++) {
                const star = document.getElementsByClassName(`star--${i}`)[0];
                star.classList.remove(`star--${i}__start-animation`);
            }
            shooting();
        }, 5400);
        return () => clearTimeout();
    }, [])

    return (
        <>
            { resizedViewportStars ? resizedViewportStars.map(star => star) : starsCreator(document.documentElement.clientWidth, false) }
        </>
    )
}

export default Stars;