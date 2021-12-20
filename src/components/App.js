import React, {Component} from 'react';
import '../scss/App.scss';
import Stars from './effects/Stars.js';
import EntryText from './effects/EntryText';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

class App extends Component {
  state = {
    numberOfStars: 250
  }
  render() {
    return (
      <>
        <EntryText />
        <Stars numberOfStars={250} onresize={() => console.log('hi')} />
        <Home />
        <Portfolio />
        <About />
      </>
    );
  }
}

export default App;
