const ExpressFood = () => {
    return (
        <div className='portfolio--project' id='ExpressFood' >
            <hr/>
            <h2>Express Food Database</h2>
            <div className='portfolio--project--img'></div>
            <p>I created a database for the fictitious food delivery company, ExpressFood, using UML diagrams and MySQL. Additionally, I queried my database using MySQL.</p>
            <h3>Skills Used:</h3>
            <ul>
                <li key={1}>MySQL</li>
                <li key={2}>UML Diagrams</li>
            </ul>
            <a href='https://github.com/mbdev95/OpenClassrooms-Project-4-Database-For-Express-Food/blob/master/README.md' target='_blank' rel='noreferrer'>
                <button type='button'>Application Explanation</button>
            </a>
        </div>
    );
}

export default ExpressFood;