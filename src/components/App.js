import Stars from './effects/Stars.js';
import EntryText from './effects/EntryText';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import {
    Routes,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <>
            <EntryText />
            <Stars />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>
    );
}

export default App;

