import React from 'react';
import stackIllustration from './stack.bmp';

function Slide(props) {
  return (
    <div>
      <p>You can think of the call stack like breadcrumbs or a bookmark.</p>

      <ul>
        <li>
          Every time a function is called, the current context is stored at the
          top of the call stack.
        </li>
        <li>
          When the function returns, it removes the top context and uses that
          context to continue execution.
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
        Storing the stack requires memory; I think we’ve all experienced running
        out of memory, whether from an accidental infinite loop or otherwise.
      </p>
    </div>
  );
}

export default Slide;
