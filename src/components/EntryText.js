import React, {useEffect} from 'react';

const EntryText = () => {

    const fadeTextIn = () => {
        document.getElementsByClassName('entryText')[0].classList.add('entryText__fade-in');
    }

    useEffect(() => { 
        fadeTextIn();
        setTimeout(() => {
            const introLettersAmount = document.querySelectorAll('.entryText span').length;
            for ( let i = 0; i < introLettersAmount; i++ ) {
                document.querySelectorAll('.entryText span')[i].classList.add(`entryText--${i + 1}__rotate-away`);
            }
        }, 3500); 
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