const ARPingPong = () => {
  return (
    <div className="portfolio--project" id="AugmentedRealityPingPong">
      <h2>Augmented Reality Ping-Pong</h2>
      <div className="portfolio--project--img"></div>
      <p>
        I used the virtual reality web framework A-frame, the 3D model creator
        Blender, the web library AR.js and vanilla JavaScript to develop a 3D
        ping-pong animation. Once a marker, which is linked below, is viewable
        by a camera the animation sequence will be visible on the screen of the
        device viewing the marker.
      </p>
      <h3>Skills Used:</h3>
      <ul>
        <li key={1}>Vanilla JavaScript</li>
        <li key={2}>A-frame</li>
        <li key={3}>AR.js</li>
      </ul>
      <div className="portfolio--project--githubLinks">
        <a
          href="https://github.com/mbdev95/ar-pong"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">Application Explanation</button>
        </a>
        <a href="https://ar-pong.vercel.app/" target="_blank" rel="noreferrer">
          <button type="button">Application Live</button>
        </a>
        <a
          href="https://drive.google.com/file/d/1DnNyy_2caFgzqnJ3IFvRzWje1Ar8aY4N/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">Marker</button>
        </a>
      </div>
    </div>
  );
};

export default ARPingPong;
