import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Ternary operators work on three operands.</p>
      <p>
        There is only one in JavaScript, the conditional operator. It is also
        referred to as the ternary operator.
      </p>
      <pre>
        <code>{`condition ? val1 : val2
if the condition is true, return val1, else return val2`}</code>
      </pre>
    </div>
  );
}

export default Slide;
