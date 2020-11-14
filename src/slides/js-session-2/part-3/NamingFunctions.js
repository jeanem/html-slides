import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>a good name expresses the purpose of the function clearly </p>
      <blockquote cite="https://eloquentjavascript.net/03_functions.html">
        {' '}
        How difficult it is to find a good name for a function is a good
        indication of how clear a concept it is that you’re trying to wrap.{' '}
      </blockquote>
      <ul>
        <li>
          break up large functions into single purpose functions with concise
          descriptive names
        </li>
        <li>
          but resist the urge to make a function overly versatile if not needed
        </li>
        <li>
          user test your function naming, see if a colleague (or your future
          self) can follow what is happening
        </li>
      </ul>
    </div>
  );
}

export default Slide;
