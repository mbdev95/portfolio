import {useEffect, useContext} from 'react';
import {pageInfoContext} from '../context';

const Stars = () => {

    const numberOfStars = useContext(pageInfoContext).numberOfStars;

    const shooting = () => {
        for (let i = 1; i < numberOfStars + 1; i++) {
            const star = document.getElementsByClassName(`star--${i}`)[0];
            const randomStarSpeed = Math.floor(Math.random() * 25) + 5;
            const randomStarDelay = Math.floor(Math.random() * 10);
            const randomTwinkleSpeed = Math.floor(Math.random() * 7) + 2;
            const randomTwinkleDelay = Math.floor(Math.random() * 30) + 0.5;;
            star.classList.add(`star--${i}__shooting`);
            star.style.setProperty(`--star-speed`, randomStarSpeed + 's');
            star.style.setProperty(`--star-delay`, randomStarDelay + 's');
            star.style.setProperty(`--twinkle-speed`, randomTwinkleSpeed + 's');
            star.style.setProperty(`--twinkle-delay`, randomTwinkleDelay + 's');
        }
    }

    const totalPageHeight = () => {
        const body = document.getElementsByTagName('BODY')[0];
        const html = document.getElementsByTagName('HTML')[0];
        const totalPageHeight = Math.max(html.scrollHeight, body.scrollHeight, html.clientHeight, body.offsetHeight, html.offsetHeight );
        for (let i = 1; i < numberOfStars + 1; i++) {
            const pageHeight = Math.floor(Math.random() * totalPageHeight);
            document.getElementsByClassName(`star--${i}`)[0].style.setProperty('--percentage-below-top', pageHeight + 'px');
        }
    }

    useEffect(() => {
        totalPageHeight();
        setTimeout(() => {
            for (let i = 1; i < numberOfStars + 1; i++) {
                document.getElementsByClassName(`star--${i}`)[0].classList.remove(`star--${i}__start-animation`);
            }
        }, 5450);
        setTimeout(() => {
            shooting();
        }, 5500);
        return () => clearInterval();
    }, [])

    window.addEventListener('resize', () => {
        totalPageHeight();
        shooting();
    })

    const starMultiplier = () => {
        let stars = [];
        for (let i = 1; i < numberOfStars + 1; i++) {
            stars.push(<div className={`star--${i} star--${i}__start-animation`} key={i}></div>);
        }
        return <div>{stars}</div>
    }

    return (
        <>
            {starMultiplier()}
        </>
    )
}

export default Stars;