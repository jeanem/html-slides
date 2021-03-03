import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Another way to write a function is to use Declaration Notation where the
        function keyword is as the start of the statement.
      </p>
      <p>
        The important thing to note about this format is that the function is
        “hoisted” to the top of its scope and is available to all the code in
        that block.
      </p>
      <p>
        Useful for organizing code in ways that are easier to understand without
        affecting the application flow
      </p>
      <pre>
        <code>{`function square(x) {
  return x * x;
}`}</code>
      </pre>
    </div>
  );
}

export default Slide;
