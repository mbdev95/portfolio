import React, {Component} from 'react';
import '../scss/App.scss';
import Stars from './Stars.js';
import EntryText from './EntryText';

class App extends Component {
  state = {
    numberOfStars: 250
  }
  render() {
    return (
      <>
        <EntryText />
        <Stars numberOfStars={250} onresize={() => console.log('hi')} />
      </>
    );
  }
}

export default App;
