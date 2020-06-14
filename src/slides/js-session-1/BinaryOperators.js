import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Binary operators work on two operands</p>
      <pre>
        <code>{`1 + 2
3 > 2 

a && b (AND: returns true if both are true)
a || b (OR: returns true if one is true)

9 / 3 (division)
9 % 3 (remainder or modulo operator)

a == b (equal or equivalent)
a === b (strictly equal, operands are equal and same type)
`}</code>
      </pre>
    </div>
  );
}

export default Slide;
