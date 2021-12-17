import React, {useEffect} from 'react';

const Stars = () => {

    useEffect(() => {
        setTimeout(() => {
            for (let i = 1; i < 251; i++) {
                document.getElementsByClassName(`star--${i}`)[0].classList.remove(`star--${i}__start-animation`);
            }
        }, 5500);
        setInterval(() => {
            setTimeout(() => {
                for (let i = 1; i < 76; i++) {
                    const randomNumber = Math.floor(Math.random() * 250) + 1;
                    document.getElementsByClassName(`star--${randomNumber}`)[0].classList.add(`star--${randomNumber}__twinkling`);
                    setTimeout(() => document.getElementsByClassName(`star--${randomNumber}`)[0].classList.remove(`star--${randomNumber}__twinkling`), 2000);
                }
            }, 5500)
        }, 2000);
        setInterval(() => {
            setTimeout(() => {
                for (let i = 1; i < 51; i++) {
                    const randomStar = Math.floor(Math.random() * 250) + 1;
                    const randomX = Math.floor(Math.random() * 100);
                    const randomY = Math.floor(Math.random() * 100);
                    document.getElementsByClassName(`star--${randomStar}`)[0].classList.add(`star--${randomStar}__shooting`);
                    document.getElementsByClassName(`star--${randomStar}`)[0].style.setProperty('--random-shooting-x', randomX + 'vw');
                    document.getElementsByClassName(`star--${randomStar}`)[0].style.setProperty('--random-shooting-y', randomY + 'vh');
                    setTimeout(() => document.getElementsByClassName(`star--${randomStar}`)[0].classList.remove(`star--${randomStar}__shooting`), 20000);
                }
            }, 5500)
        }, 20000);
        return () => clearInterval();
    }, [])

    const starMultiplier = () => {
        let stars = [];
        for (let i = 1; i < 251; i++) {
            stars.push(<div className={`star--${i} star--${i}__start-animation`} key={i}></div>);
        }
        return <div>{stars}</div>
    }

    return (
        starMultiplier()
    )
}

export default Stars;