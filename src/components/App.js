import {useRef} from 'react';
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
import { useContext } from 'react/cjs/react.development';
import { pageInfoContext } from './context/index.js';

const App = () => {

    const location = useLocation();
    const context = useContext(pageInfoContext);
    // const nodeRef = useRef(null);
    // nodeRef={nodeRef}
    // context.isLargeViewport ? 1000 : 500
    
    return (
        <>
            <EntryText />
            <Stars />
            <TransitionGroup>
                <CSSTransition key={location.key} appear={true} timeout={15000} classNames='translate'> 
                    {/* <div ref={nodeRef} > */}
                        <Routes location={location}>
                            <Route exact path='/' element={<Home />} />
                            <Route path='/portfolio' element={<Portfolio />} />
                            <Route path='/about' element={<About />} />
                        </Routes>
                    {/* </div> */}
                </CSSTransition>
            </TransitionGroup>
        </>
    );
}

export default App;

