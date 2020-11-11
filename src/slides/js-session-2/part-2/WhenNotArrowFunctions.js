import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>Cannot be used as a constructor.</li>
        <li>
          Does not have its own bindings to this or super, and should not be
          used as methods.
        </li>
        <li>
          Not suitable for call, apply and bind methods (usually rely on
          establishing scope).
        </li>
        <li>Can't use yield keyword within the body.</li>
      </ul>

      <p>
        Source:
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">
          MDN
        </a>
      </p>
    </div>
  );
}

export default Slide;
