import React from 'react';
import stackIllustration from './stack.bmp';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          Every time a function is called, the current context is stored at the
          top of a "call stack" and then the function is carried out.
        </li>
        <li>
          Any functions that are called by that function are added to the top of
          the call stack and run where their calls are reached. <br /> <br />
          For example: within <code>function a</code> calls
          <code>function b</code>, <code>function b</code> is added on top of
          <code>function a</code> in the call stack.
        </li>
        <li>
          When the current function returns (finishes), the function is removed
          from the stack and the current context is used to continue execution
          where it left off in the last code listing. <br /> <br />
          In our example, when <code>function b</code> completes, it is removed
          from the top of the call stack, and <code>function a</code> is now
          back at the top again.
        </li>
        <li>Concept: Last In, First Out (LIFO)</li>
      </ul>
      <img src={stackIllustration} alt="Illustration of call stack" />
      <p>
        Illustration source:
        <a href="https://www.cs.cmu.edu/~adamchik/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html">
          CMU
        </a>
      </p>
    </div>
  );
}

export default Slide;
