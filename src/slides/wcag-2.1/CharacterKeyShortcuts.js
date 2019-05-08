import React from 'react';

function Slide(props) {
  const { shortTitle } = props;
  var WCAGLink = (
    <a
      href={'https://www.w3.org/WAI/WCAG21/Understanding/' + currentDetailLink}
    >
      {currentTitle} {currentNumber} ({currentLevel}) details and exceptions
    </a>
  );
  var shortWCAGLink =
    'https://www.w3.org/WAI/WCAG21/Understanding/' + currentDetailLink;
  return (
    <div className="w-SlideBody">
      <blockquote cite={WCAGLink}>
        If a keyboard shortcut is implemented in content using only letter
        (including upper- and lower-case letters), punctuation, number, or
        symbol characters, then at least one of the following is true:
      </blockquote>

      <ul>
        <li>Can be turned off</li>
        <li>
          Can be remapped to use one or more non-printable keyboard characters
          (e.g. Ctrl, Alt, etc);
        </li>
        <li>
          The keyboard shortcut for a user interface component is only active
          when that component has focus, like a moving through a select element
          using letters to move among choices.{' '}
          <cite>
            <a href="https://knowbility.org/blog/2018/WCAG21-214CharacterKeyShortcuts/">
              {' '}
              See knowbility.org.
            </a>
          </cite>
        </li>
        <li>Accesskeys are not affected because they include modifier keys</li>
      </ul>
      <p>{currentNumber != null ? WCAGLink : null}</p>
    </div>
  );
}

export default Slide;
