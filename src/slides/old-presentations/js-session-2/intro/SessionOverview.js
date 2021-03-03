import React from 'react';

function Slide(props) {
  return (
    <div>
      <ol>
        <li>Review of the last JavaScript session </li>
        <li>
          Introduction to functions
          <ul>
            <li>Breakout groups: Minimum exercise </li>
          </ul>
        </li>

        <li>
          Arrow functions and other concepts
          <ul>
            <li>Breakout groups: Bean counting exercise </li>
          </ul>
        </li>
        <li>
          Wrap-up: Function best practices, further reading on advanced concepts
        </li>
      </ol>
      <p>
        Marijn Haverbeke's book,{''}{' '}
        <a href="https://eloquentjavascript.net/">Eloquent Javascript</a> is our
        guide.
      </p>
    </div>
  );
}

export default Slide;
