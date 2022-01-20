const RandomQuotes = () => {
    return (
        <div className='portfolio--project' id='OrwellianRandomQuoteGenerator' >
            <hr/>
            <h2>Orwellian Randon Quotation Generator</h2>
            <div className='portfolio--project--img'></div>
            <p>The Orwellian Random Quotation Generator was developed using JavaScript logic to randomly select from a series of quotes in either 'Animal Farm' or '1984'.</p>
            <h3>Skills Used:</h3>
            <ul>
                <li key={1}>JavaScript</li>
                <li key={2}>CSS3</li>
                <li key={3}>Bootstrap</li>
                <li key={4}>HTML5</li>
            </ul>
            <div className='portfolio--project--githubLinks'>
                <a href='https://github.com/mbdev95/OpenClassrooms-Project-5-Orwellian-Quotation-Generator/blob/master/README.md' target='_blank' rel='noreferrer'>
                    <button type='button'>Application Explanation</button>
                </a>
                <a href='https://mbdev95.github.io/OpenClassrooms-Project-5-Orwellian-Quotation-Generator/' target='_blank' rel='noreferrer'>
                    <button type='button'>Application Live</button>
                </a>
            </div>
        </div>
    );
}

export default RandomQuotes;