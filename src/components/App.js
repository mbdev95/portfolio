import {useState, useContext, useEffect} from 'react';
import { pageInfoContext } from './context/index.js';
import Stars from './effects/Stars.js';
import EntryText from './effects/EntryText';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {

    const location = useLocation();
    const context = useContext(pageInfoContext);

    const [firstSlide, setFirstSlide] = useState(false);

// The innerheight of the window is passed to CSS to set height of html as inner height to avoid browser header affecting vertical page layout.
// The first slide is delayed until after the opening animation has ended.
    useEffect(() => { 
        const html = document.getElementsByTagName('html')[0];
        html.style.setProperty('--window-height', window.innerHeight);
        const firstSlideDelay = setTimeout(() => setFirstSlide(true), 6000);
        return () => clearTimeout(firstSlideDelay); 
    }, [setFirstSlide] );

// When the window resized the height of the document will still be measured as innerHeight.
    window.onresize = () => {
        document.body.height = window.innerHeight;
    }

// A funtion to delay the home page module for the time the opening effects are executing.
// The portfolio module is initially rendered to the left side of the viewport so the images can be saved in memory allowing for accurate relative links to the projects in the portfolio page linked from the home page.
// I used Transition Groups and CSS Transition from react router to do the animations of the page slides.
    const firstSlideTiming = () => {
        if ( firstSlide ) { 
            return (
                <TransitionGroup>
                    <CSSTransition key={location.key} appear={true} timeout={context.isLargeViewport ? 1000 : 500} classNames='translate' > 
                        <Routes location={location} >
                            <Route exact path='/' element={<Home />} />
                            <Route path='/portfolio' element={<Portfolio />} />
                            <Route path='/about' element={<About />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup> )
        } else {
            return <Portfolio/>;
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

