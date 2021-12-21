import Stars from './effects/Stars.js';
import EntryText from './effects/EntryText';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

const App = () => {
    return (
        <>
            <EntryText />
            <Stars />
            <Home />
            <Portfolio />
            <About />
        </>
    );
}

export default App;

