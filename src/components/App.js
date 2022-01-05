import {useState, useContext, useEffect} from 'react';
import { pageInfoContext } from './context/index.js';
import Stars from './effects/Stars.js';
import EntryText from './effects/EntryText';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const App = () => {

    const location = useLocation();
    const context = useContext(pageInfoContext);

    const [firstSlide, setFirstSlide] = useState(false);
    useEffect(() => setTimeout(() => setFirstSlide(true), 6000) );

    const firstSlideTiming = () => {
        if ( firstSlide ) { 
            return (
                <TransitionGroup>
                    <CSSTransition key={location.key} appear={true} timeout={context.isLargeViewport ? 1000 : 500} classNames='translate' > 
                        <Routes location={location}>
                            <Route exact path='/' element={<Home />} />
                            <Route path='/portfolio' element={<Portfolio />} />
                            <Route path='/about' element={<About />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup> )
        } else {
            return null;
        }
    }

    return (
        <>
            <EntryText />
            <Stars />
            {firstSlideTiming()}
        </>
    );
}

export default App;

