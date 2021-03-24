import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          A function that calls itself a condition is met is called recursive.
        </li>
        <li>
          Sometimes better than looping, recursive functions are a good tool
          when necessary.
        </li>
        <li>A “base case” is the condition that stops recursion.</li>
        <li>
          If it doesn’t stop, it’ll run forever (until the program crashes),
          just like an infinite loop.
        </li>
      </ul>
    </div>
  );
}

export default Slide;
