import React, {useEffect} from 'react';

const Stars = () => {

    useEffect(() => {
        setTimeout(() => setInterval(() => {
            for (let i = 1; i < 51; i++) {
                const randomNumber = Math.floor(Math.random() * 250) + 1;
                document.getElementsByClassName(`star--${randomNumber}`)[0].classList.add(`star--${randomNumber}__shooting`);
                setTimeout(() => document.getElementsByClassName(`star--${randomNumber}`)[0].classList.remove(`star--${randomNumber}__shooting`), 3000);
            }
        }, 3000), 6000);
        return () => clearInterval();
    }, [])

    const starMultiplier = () => {
        let stars = [];
        for (let i = 1; i < 251; i++) {
            stars.push(<div className={`star--${i} star--${i}__animation`} key={i}></div>);
        }
        return <div>{stars}</div>
    }

    return (
        starMultiplier()
    )
}

export default Stars;