import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Something about IIFE...</p>
      <p>
        An IIFE (Immediately Invoked Function Expression - pronounced
        <em>iffy</em>) is a JavaScript function that runs as soon as it is
        defined.
      </p>
      {/* <p>
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
      </pre> */}
      <p>
        Source:
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/IIFE">MDN</a>
      </p>
    </div>
  );
}

export default Slide;
