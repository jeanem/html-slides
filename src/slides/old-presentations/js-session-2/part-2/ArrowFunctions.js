import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Arrow functions use the <code>{`=>`}</code> (arrow) syntax instead of
        the <code>{`function`}</code> keyword.
      </p>

      <p>
        The arrow comes after the list of <em>parameters</em> and is followed by
        the function’s <em>body</em>.
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
