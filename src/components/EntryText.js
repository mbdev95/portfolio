import React, {useEffect} from 'react';

const EntryText = () => {

    const fadeTextIn = () => {
        document.getElementsByClassName('entryText')[0].classList.add('entryText__fade-in');
        const introLetters = document.querySelectorAll('.entryText span');
        for ( let i = 0; i < introLetters.length; i++ ) {
            const location = introLetters[i].getBoundingClientRect();
            introLetters[i].style.setProperty('--top-entry-letter', location.top + 'px');
            introLetters[i].style.setProperty('--left-entry-letter', location.left + 'px');
        }
    }

    const fadeTextOut = () => {
        const introLetters = document.querySelectorAll('.entryText span');
        const randomX = Math.floor(Math.random() * 90) + 10;
        const randomY = Math.floor(Math.random() * 90) + 10;
        for ( let i = 0; i < introLetters.length; i++ ) {
            introLetters[i].classList.add(`entryText--${i + 1}__rotate-away`);
            introLetters[i].style.setProperty('--translate-x', randomX + '%');
            introLetters[i].style.setProperty('--translate-y', randomY + '%');
        }
    }

    useEffect(() => { 
        fadeTextIn();
        setTimeout(() => fadeTextOut(), 4500); 
    }, []);

    return (
        <div className='entryText'>
            <span>H</span><span>I</span><span>,</span><span>{' '}</span><span>I</span><span>'</span>
            <span>M</span><span>{' '}</span><span>M</span><span>A</span><span>R</span><span>K</span><span>!</span>
            <span>{' '}</span><span>A</span><span>{' '}</span><span>C</span><span>O</span><span>M</span><span>P</span>
            <span>U</span><span>T</span><span>E</span><span>R</span><span>{' '}</span><span>S</span>
            <span>O</span><span>F</span><span>T</span><span>W</span><span>A</span><span>R</span>
            <span>E</span><span>{' '}</span><span>E</span><span>N</span><span>G</span><span>I</span>
            <span>N</span><span>E</span><span>E</span><span>R</span>
        </div>
    );
}

export default EntryText;