import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          A function that calls itself until a condition is met is called
          recursive.
        </li>
        <li>
          Functionally similar to looping, recursive functions are sometimes
          better. - WHY?
        </li>
        <li>A “base case” is the condition that stops recursion.</li>
        <li>
          If it doesn’t stop, it’ll run forever (until the program crashes),
          just like an infinite loop. (Recall our overview of the call stack.)
        </li>
      </ul>
    </div>
  );
}

export default Slide;
