import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>a pure function is</p>
      <ul>
        <li>is value-producing</li>
        <li>has no side-effects</li>
        <li>and doesn’t rely on side effects of other code</li>
        <li>always produces the same code when called with same arguments</li>
      </ul>

      <p>
        <code>Here is my example</code>
      </p>
    </div>
  );
}

export default Slide;
