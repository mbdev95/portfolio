const stars = () => {

    const starMultiplier = () => {
        let stars = [];
        for (let i = 0; i < 250; i++) {
            stars.push(<div className={`star--${i + 1} star--${i + 1}__twinkle star--${i + 1}__shooting`} key={i + 1}></div>);
        }
        return <div>{stars}</div>
    }

    return (
        starMultiplier()
    )
}

export default stars;