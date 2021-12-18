import React, {useEffect} from 'react';

const Stars = (props) => {

    const {
        numberOfStars
    } = props

    const shooting = () => {
        for (let i = 1; i < numberOfStars + 1; i++) {
            const randomStarSpeed = Math.floor(Math.random() * 25) + 5;
            const randomStarDelay = Math.floor(Math.random() * 10);
            const randomTwinkleSpeed = Math.floor(Math.random() * 7) + 2;
            const randomTwinkleDelay = Math.floor(Math.random() * 30) + 0.5;;
            document.getElementsByClassName(`star--${i}`)[0].classList.add(`star--${i}__shooting`);
            document.getElementsByClassName(`star--${i}`)[0].style.setProperty(`--star-speed`, randomStarSpeed + 's');
            document.getElementsByClassName(`star--${i}`)[0].style.setProperty(`--star-delay`, randomStarDelay + 's');
            document.getElementsByClassName(`star--${i}`)[0].style.setProperty(`--twinkle-speed`, randomTwinkleSpeed + 's');
            document.getElementsByClassName(`star--${i}`)[0].style.setProperty(`--twinkle-delay`, randomTwinkleDelay + 's');
        }
    }

    useEffect(() => {
        setTimeout(() => {
            for (let i = 1; i < numberOfStars + 1; i++) {
                document.getElementsByClassName(`star--${i}`)[0].classList.remove(`star--${i}__start-animation`);
            }
        }, 4450);
        setTimeout(() => {
            shooting();
        }, 4500);
        return () => clearInterval();
    }, [])

    const starMultiplier = () => {
        let stars = [];
        for (let i = 1; i < numberOfStars + 1; i++) {
            stars.push(<div className={`star--${i} star--${i}__start-animation`} key={i}></div>);
        }
        return <div>{stars}</div>
    }

    return (
        starMultiplier()
    )
}

export default Stars;