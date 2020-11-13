import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>Arrow functions were added to JavaScript in 2015</li>
        <li>
          Mostly to make it possible to write smaller functions in a less
          verbose way
        </li>
        <li>
          No deep reason to have both arrow functions and traditional functions,
          except there are times you cannot use arrow functions (next).
        </li>
      </ul>

      <h3>Example</h3>
      <p>Let's compare traditional functions and arrow functions.</p>

      <pre>
        <code>
          {`
// Traditional Function
function (a, b){
  return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;

// Traditional Function (no arguments)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;
      `}
        </code>
      </pre>
      <p>
        Example source:
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">
          MDN
        </a>
      </p>
    </div>
  );
}

export default Slide;
