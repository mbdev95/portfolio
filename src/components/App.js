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

    slide = (pageIn, pageOut) => {
        if (pageOut === null) {
          document.getElementsByClassName(pageIn)[0].classList.add(`${pageIn}__translateXIn`); 
        } else {
            document.getElementsByClassName(pageIn)[0].classList.add(`${pageIn}__translateXIn`);
            document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXIn`);
            document.getElementsByClassName(pageOut)[0].classList.add(`${pageOut}__translateXOut`);
            setTimeout(() => {
                document.getElementsByClassName(pageOut)[0].classList.remove(`${pageOut}__translateXOut`);
            }, 2000);
        }
    }

    render() {
        return (
            <>
                <EntryText />
                <Stars numberOfStars={250} />
                <Home slide={this.slide} />
                <Portfolio slide={this.slide} />
                <About slide={this.slide} />
            </>
        );
    }
}

export default App;
