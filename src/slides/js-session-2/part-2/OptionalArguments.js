import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        JavaScript is extremely broad-minded about the number of arguments you
        can pass to a function. Pass too many, extra are ignored. Pass too few,
        the missing are set to undefined.
      </p>

      <p>
        <strong>Downside:</strong> You will likely pass the incorrect number of
        arguments to a function and not know it. JavaScript won’t give you an
        error or warning.
      </p>

      <p>
        <strong>Upside:</strong> This can allow a function to be called with
        different numbers of arguments for broader usage.
      </p>

      <p>
        We can also set <em>default arguments</em>.
      </p>

      <h3>Example</h3>
      <pre>
        <code>
          {`
function powerNew(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

powerNew(4);
powerNew(2, 6);
          `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
