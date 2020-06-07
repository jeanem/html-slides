import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Binary operators work on two operands</p>
      <pre>
        <code>{`val1 == val2, equal or equivalent
val1 === val2, strictly equal 
(true if operands are equal and the same type)
`}</code>
      </pre>
    </div>
  );
}

export default Slide;
