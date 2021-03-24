import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          Essentially the same as for/while loops but sometimes more elegant.
        </li>
        <li>
          In a loop, there are extra variables to track progress (i, j, k). In
          recursion, an extra variable is not needed (call stack).
        </li>
        <li>Recursion is usually shorter than iterative (loops).</li>
        <li>Loops are easier to write and maintain.</li>
      </ul>
    </div>
  );
}

export default Slide;
