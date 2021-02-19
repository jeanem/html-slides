import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        <em>
          Note: These are more advanced topics but it's important to know about
          them for when they inevitably come up. Many of these topics are
          related to object-oriented programming, which is first discussed in
          Chapter 6 and then in-depth in Chapter 8.
        </em>
      </p>
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
