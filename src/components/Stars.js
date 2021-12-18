import React, {useEffect} from 'react';

const Stars = () => {

    const twinkling = () => {
        for (let i = 1; i < 76; i++) {
            const randomNumber = Math.floor(Math.random() * 250) + 1;
            document.getElementsByClassName(`star--${randomNumber}`)[0].classList.add(`star--${randomNumber}__twinkling`);
            setTimeout(() => document.getElementsByClassName(`star--${randomNumber}`)[0].classList.remove(`star--${randomNumber}__twinkling`), 2000);
        }
    }

    const shooting = () => {
        for (let i = 1; i < 251; i++) {
            document.getElementsByClassName(`star--${i}`)[0].classList.add(`star--${i}__shooting`);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            for (let i = 1; i < 251; i++) {
                document.getElementsByClassName(`star--${i}`)[0].classList.remove(`star--${i}__start-animation`);
            }
        }, 5500);
        setTimeout(() => {
            twinkling();
            setInterval(() => {
                    twinkling();
            }, 2000);
        }, 5500);
        setTimeout(() => {
            shooting();
        }, 5500);
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