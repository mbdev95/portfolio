const stars = () => {

    const starMultiplier = () => {
        let stars = [];
        for (let i = 0; i < 100; i++) {
            stars.push(<div className='stars' key={i}></div>);
        }
        <div className='stars'></div>
        return <div>{stars}</div>
    }

    return (
        starMultiplier()
    )
}

export default stars;