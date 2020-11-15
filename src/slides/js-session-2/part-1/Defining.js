import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        A function definition is a regular binding where the value of the
        binding is a function. The expression begins with the keyword ‘function’
      </p>
      <h3>Parameters</h3>
      <p>A function can have multiple inputs or none at all</p>
      <h3>Return</h3>
      <p>A function returns either a defined or undefined value</p>
      <p>
        Return can be used to control the flow within the function If the logic
        flows through a function without hitting an explicit return, the
        function will return undefiled when it hits the end of the block
      </p>
      <pre>
        <code>{`const square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144`}</code>
      </pre>
    </div>
  );
}

export default Slide;
