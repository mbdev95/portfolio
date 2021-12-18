import React, {Component} from 'react';
import '../scss/App.scss';
import Stars from './Stars.js';

class App extends Component {
  state = {
    numberOfStars: 250
  }
  render() {
    return (
      <>
        <Stars numberOfStars={250} />
      </>
    );
  }
}

export default App;
