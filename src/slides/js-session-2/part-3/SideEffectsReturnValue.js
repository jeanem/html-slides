import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Functions can ...</p>
      <ul>
        <li>
          produce a side effect which does something
          <code>Here is my example</code>
        </li>
        <li>
          or return a value
          <code>Here is my example</code>
        </li>
        <li>
          or do both
          <code>Here is my example</code>
        </li>
      </ul>

      <blockquote cite="https://eloquentjavascript.net/03_functions.html">
        Functions that create values are easier to combine in new ways than
        functions that directly perform side effects.
      </blockquote>
    </div>
  );
}

export default Slide;
