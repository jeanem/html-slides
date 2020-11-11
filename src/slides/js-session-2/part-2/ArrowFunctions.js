import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Arrow functions use the =&gt; (arrow) syntax instead of the function
        keyword.
      </p>

      <p>
        The arrow comes after the list of parameters and is followed by the
        function’s body.
      </p>

      <p>
        Can be read as: “This input (parameters) produces this result (body).”
      </p>

      <h3>Example</h3>
      <pre>
        <code>
          {`
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

power(10, 5);
        `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
