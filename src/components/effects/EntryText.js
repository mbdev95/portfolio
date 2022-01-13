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

    const entryText = () => {
        const entryString = "HI, I'M MARK! A COMPUTER SOFTWARE ENGINEER";
        return entryString.split('').map((letter, index) => <span key={index}>{letter}</span>);
    }

    useEffect(() => { 
        fadeTextIn();
        const fadeOutTimeOut = setTimeout(() => fadeTextOut(), 4500); 
        const removeTextClassTimeOut = setTimeout(() => document.getElementsByClassName('entryText')[0].remove(), 6500);
        return () => clearTimeout(fadeOutTimeOut, removeTextClassTimeOut);
    }, []);

    return (
        <div className='entryText'>
            {entryText()}
        </div>
    );
}

export default EntryText;