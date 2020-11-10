import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Unary operators work on one operand</p>
      <pre>
        <code>{`!x, logical NOT
++x, adds one
typeof 10, determines the type
`}</code>
      </pre>
    </div>
  );
}

export default Slide;
