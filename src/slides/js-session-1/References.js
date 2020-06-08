import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        The bulk of the material for this presentation is from the book{' '}
        <a href="https://eloquentjavascript.net">Eloquent Javascript</a> by
        Marijn Haverbeke, Third Edition, 2019
      </p>
      <p>Other references and further reading</p>
      <ul>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators">
            MDN Expressions and Operators
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Slide;
