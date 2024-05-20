import React, { useEffect } from "react";

const EntryText = () => {
  // Adds the CSS class to fade the text in upon page load.
  const fadeTextIn = () => {
    document
      .getElementsByClassName("entryText")[0]
      .classList.add("entryText__fade-in");
  };

  // Sets the top and left absolute offsets for each letter so they are able to individually scale to zero while rotating 360 degrees.
  const fadeTextOut = () => {
    const introLetters = document.querySelectorAll(".entryText span");
    for (let i = 0; i < introLetters.length; i++) {
      const location = introLetters[i].getBoundingClientRect();
      introLetters[i].style.setProperty(
        "--top-entry-letter",
        location.top + "px"
      );
      introLetters[i].style.setProperty(
        "--left-entry-letter",
        location.left + "px"
      );
    }
    introLetters.forEach((letter) =>
      letter.classList.add(`entryText__rotate-away`)
    );
  };

  // Iterates through the opening string of letters returning each letter to be rendered to the DOM.
  const entryText = () => {
    const entryString = "HI, I'M MARK! A SOFTWARE DEVELOPER";
    return entryString
      .split("")
      .map((letter, index) => <span key={index}>{letter}</span>);
  };

  // The letters fade in upon page load and are timed to animate away after 4.5s, and be removed from the DOM 2s later.
  useEffect(() => {
    fadeTextIn();
    const fadeOutTimeOut = setTimeout(() => fadeTextOut(), 4500);
    const removeTextClassTimeOut = setTimeout(
      () => document.getElementsByClassName("entryText")[0].remove(),
      6500
    );
    return () => clearTimeout(fadeOutTimeOut, removeTextClassTimeOut);
  }, []);

  return <div className="entryText">{entryText()}</div>;
};

export default EntryText;
