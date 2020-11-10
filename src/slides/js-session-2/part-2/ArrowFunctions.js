import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Arrow functions use the <code>=&gt;</code> syntax instead of the
        <code>function</code> keyword.
      </p>
      <ul>
        <li>Arrow functions were added to JavaScript in 2015</li>
        <li>
          Mostly to make it possible to write smaller functions in a less
          verbose way
        </li>
        <li>
          No deep reason to have both arrow functions and traditional functions
        </li>
      </ul>
    </div>
  );
}

export default Slide;
