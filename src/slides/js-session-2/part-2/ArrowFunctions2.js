import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        When there is only one parameter name, you can omit the parentheses
        around the parameter list.
      </p>

      <p>
        If the body is a single expression (rather than a block with braces),
        that expression will be returned from the function.
      </p>

      <h3>Example</h3>
      <p>These definitions of square do the same thing.</p>
      <pre>
        <code>
          {`
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
          `}
        </code>
      </pre>

      <p>
        When an arrow function has no parameters, use an empty set of
        parentheses.
      </p>

      <h3>Example</h3>
      <pre>
        <code>
          {`
const horn = () => {
  console.log("Toot");
};
        `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
