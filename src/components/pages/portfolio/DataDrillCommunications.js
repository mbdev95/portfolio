const DataDrillCommunications = () => {
  return (
    <div className="portfolio--project" id="WorkExperience">
      <h2>DataDrill Communications Work Experience</h2>
      <div className="portfolio--project--img"></div>
      <p>
        I am currently employed with DataDrill Communications as a full stack
        software developer. I have assisted DataDrill in improving upon
        technologies which provide remote worksites with optimal connectivity by
        leveraging the capabilities of Python, Django, AWS and Linux.
        Additionally, I helped to program an algorithm which locates the
        direction of the cell tower which will provide the best signal. I help
        manage and improve existing software for a variety of accounting
        applications which assist in payroll, HR and billing clients. I helped
        make DataDrill serverless by migrating all the applications to the
        cloud. I used REST APIs and direct SQL queries to effectively transfer
        data between the client and server. I write unit tests and documentation
        to ensure the code written is maintainable and future-proof. Finally, I
        offer support to software requests.
      </p>
      <h3>Skills Used:</h3>
      <ul>
        <li key={1}>Python</li>
        <li key={2}>Django</li>
        <li key={3}>MySQL</li>
        <li key={4}>Linux</li>
        <li key={5}>JavaScript</li>
        <li key={6}>React</li>
        <li key={7}>AWS</li>
        <li key={8}>REST APIs</li>
        <li key={9}>IIS</li>
      </ul>
      <a href="https://www.datadrill.ca/" target="_blank" rel="noreferrer">
        <button type="button">DataDrill Website</button>
      </a>
    </div>
  );
};

export default DataDrillCommunications;
