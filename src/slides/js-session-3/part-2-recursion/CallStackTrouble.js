import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          Infinite loop or infinite recursion &mdash; always make sure you have
          a case that will be met, or an exit point.
        </li>
        <li>
          If the stack takes up more space than it had assigned to it, it
          results in a "stack overflow" error.
        </li>
        <li>
          Storing the stack requires memory. If the stack grows too big, the
          computer will fail with an error such as "out of stack space" or "too
          much recursion."
        </li>
      </ul>
      <p>
        Partial Source:
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack">
          MDN
        </a>
      </p>
    </div>
  );
}

export default Slide;
