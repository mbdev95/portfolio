const WarOfWeapons = () => {
  return (
    <div className="portfolio--project" id="WorkExperience">
      <hr />
      <h2>DataDrill Communications Work Experience</h2>
      <div className="portfolio--project--img"></div>
      <p>
        I am currently employed with DataDrill communications as a full stack
        software developer. I have assisted DataDrill in improving upon
        technologies which provide remote worksites with optimal connectivity by
        leveraging the capabilities of Python, Django, AWS and Linux. I help
        manage and improve existing software for a variety of accounting
        applications which assist in payroll, HR and billing clients. I helped
        make DataDrill serverless by migrating all the applications to the
        cloud. I used REST APIs and direct SQL queries to effectively transfer
        data between client and server. I write unit tests and documentation to
        ensure the code written is maintainable and future-proof. Finally, I
        offer support if an issue with the Software is reported.
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
      <div className="portfolio--project--githubLinks">
        <a
          href="https://github.com/mbdev95/OpenClassrooms-Project-6-War-Of-Weapons-Board-Game/blob/master/README.md"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">Application Explanation</button>
        </a>
        <a
          href="https://mbdev95.github.io/OpenClassrooms-Project-6-War-Of-Weapons-Board-Game/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">Application Live</button>
        </a>
      </div>
    </div>
  );
};

export default WarOfWeapons;
