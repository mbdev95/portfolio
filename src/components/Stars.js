import React, {useEffect} from 'react';

const Stars = () => {

    useEffect(() => {
        setTimeout(() => setInterval(() => {
            console.log('hi');
            return () => clearInterval();
        }, 3000), 9500);
    }, [])

    const starMultiplier = () => {
        let stars = [];
        for (let i = 0; i < 250; i++) {
            stars.push(<div className={`star--${i + 1} star--${i + 1}__animation`} key={i + 1}></div>);
        }
        return <div>{stars}</div>
    }

    return (
        starMultiplier()
    )
}

export default Stars;