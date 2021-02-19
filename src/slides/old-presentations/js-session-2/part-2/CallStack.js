import React from 'react';
import stackIllustration from './stack.bmp';

function Slide(props) {
  return (
    <div>
      <p>You can think of the call stack like breadcrumbs or a bookmark.</p>

      <ul>
        <li>
          Every time a function is called, the current context is stored at the
          top of the call stack and then the function is carried out.
        </li>
        <li>
          Any functions that are called by that function are added to the top of
          the call stack and run where their calls are reached.
        </li>
        <li>
          When the current function returns (finishes), the function is removed
          from the stack and the current context is used to continue execution
          where it left off in the last code listing.
        </li>
      </ul>

      <img src={stackIllustration} alt="Illustration of call stack" />

      <p>
        Illustration source:
        <a href="https://www.cs.cmu.edu/~adamchik/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html">
          CMU
        </a>
      </p>

      <p>
        If the stack takes up more space than it had assigned to it, it results
        in a "stack overflow" error.
      </p>

      <p>
        Also, storing the stack requires memory. If the stack grows too big, the
        computer will fail with an error such as "out of stack space" or "too
        much recursion."
      </p>

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
