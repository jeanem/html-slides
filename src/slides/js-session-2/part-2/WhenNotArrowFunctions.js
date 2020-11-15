import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          Cannot be used as a <code>{`constructor`}</code>.
        </li>
        <li>
          Does not have its own bindings to <code>{`this`}</code> or
          <code>{`super`}</code>, and should not be used as
          <code>{`methods`}</code>.
        </li>
        <li>
          Not suitable for <code>{`call`}</code>, <code>{`apply`}</code> and
          <code>{`bind`}</code> methods (usually rely on establishing
          <code>{`scope`}</code>).
        </li>
        <li>
          Can't use the <code>{`yield`}</code> keyword within the body.
        </li>
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
