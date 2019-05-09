import React from 'react';

function Slide(props) {
  return (
    <div>
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
    </div>
  );
}

export default Slide;
