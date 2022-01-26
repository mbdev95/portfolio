import React from 'react';
import linkedIn from '../../img/socialMediaIcons/linkedin.webp';
import GitHub from '../../img/socialMediaIcons/github.webp';
import resume from '../../img/socialMediaIcons/resume.webp';
import email from '../../img/socialMediaIcons/email.webp';

// Context is initialized as pageInfoContext.
export const pageInfoContext = React.createContext();

// The provider will provide the props to all child elements as required via the context.
export const Provider = (props) => {
    
    const viewportWidth = document.documentElement.clientWidth;

// Boolean value used to give different transition page slide speed based on viewport width length.
    const isLargeViewport = () => { 
        if ( viewportWidth >= 1025 ) {
            return true;
        } else {
            return false;
        }
    }

// h1Text() returns different h1 values depending on the viewport width.  In smaller viewports my long last name is removed.
    const h1Text = (page) => {
        const body = document.getElementsByTagName('BODY')[0];
        const html = document.getElementsByTagName('HTML')[0];
        const totalPageWidth = Math.max(html.scrollWidth, body.scrollWidth, html.clientWidth, body.offsetWidth, html.offsetWidth);
        const totalPageHeight = Math.max(html.scrollHeight, body.scrollHeight, html.clientHeight, body.offsetHeight, html.offsetHeight);
        if ((totalPageWidth > 400 && totalPageHeight > 600 ) && page === 'home' ) {
            return <h1>Mark Bucholski</h1>
        } else if ((totalPageWidth < 400 || totalPageHeight <= 600 )  && page === 'home') {
            return <h1>Mark</h1>
        } else if (totalPageWidth > 420 && page === 'portfolio') {
            return <h1>Mark's Portfolio</h1>
        } else if (totalPageWidth < 420 && page === 'portfolio') {
            return <h1>Portfolio</h1>
        } else if (totalPageWidth > 315 && page === 'about') {
            return <h1>About Mark</h1>
        } else {
            return <h1>About</h1>
        }
    }

// A function which returns the social media icons in the header if the viewport width is over 1024px.
    const socialMediaInHeader = (page) => {
        const body = document.getElementsByTagName('BODY')[0];
        const html = document.getElementsByTagName('HTML')[0];
        const totalPageWidth = Math.max(html.scrollWidth, body.scrollWidth, html.clientWidth, body.offsetWidth, html.offsetWidth);
        if ( totalPageWidth > 1024 ) {
            return (
                <div className={`${page}--header--socialMedia`}>
                    <a href='https://www.linkedin.com/in/mb-developer/' target='_blank' rel='noreferrer' title='linkedIn' aria-label='linkedIn'>
                        <img src={linkedIn} alt='LinkedIn Icon' />
                    </a>
                    <a href='https://github.com/mbdev95' target='_blank' rel='noreferrer' title='GitHub' aria-label='GitHub'>
                        <img src={GitHub} alt='GitHub Icon'/>
                    </a>
                    <a href="https://drive.google.com/file/d/1K4_GvgHHHban97g2PGFySmTd7w8hLt7L/view?usp=sharing" target='_blank' rel='noreferrer' title='resume' aria-label='resume' >
                        <img src={resume} alt='Resume Icon'/>
                    </a>
                    <a href='mailto:mbucholski95@gmail.com' target='_blank' rel='noreferrer' title='email' aria-label='email' >
                        <img src={email} alt='Email Icon'/>
                    </a>
                </div>
            );
        } 
    }

// The number of stars used in the background will depend on the viewport width.
    const numberOfStars = (vw, vh) => {
        let numberOfStars = 0;
        if ( vw < 480 ) {
            numberOfStars = 50;
        } else if ( vw < 1000 && vh < 450 ) {
            numberOfStars = 70;
        } else if ( vw >= 480 && vw <= 768 ) {
            numberOfStars = 90;
        } else if ( vw > 768 && vw <= 1025 ) {
            numberOfStars = 135;
        } else {
            numberOfStars = 175;
        }
        return numberOfStars;
    }

// The star creator function will return an array populated with stars.
    const starsCreator = (vw, vh) => {
        let stars = [];
        for (let i = 1; i < numberOfStars(vw, vh) + 1; i++) {
            stars.push(<div className={`star--${i} star--${i}__start-animation`} key={i}></div>);
        }
        return stars;
    }

// The above function declarations are passed as props to be used in child elements, and in many cases return data upwards via arguments.
    return (
        <>
            <pageInfoContext.Provider value={ {
                numberOfStars: numberOfStars,
                isLargeViewport: isLargeViewport(),
                h1Text: h1Text,
                socialMediaInHeader: socialMediaInHeader,
                starsCreator: starsCreator
            } }>
                {props.children}
            </pageInfoContext.Provider>
        </>
    );
}

