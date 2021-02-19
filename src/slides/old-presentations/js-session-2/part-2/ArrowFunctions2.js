import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        When there is only one <em>parameter name</em>, you can omit the
        parentheses around the <em>parameter list</em>.
      </p>

      <p>
        If the body is a <em>single expression</em> (rather than a block with
        braces), that expression will be returned from the function.
        <em> Note: Must be single-line only statements.</em>
      </p>

      <h3>Example</h3>
      <p>
        These definitions of <code>{`square`}</code> do the same thing.
      </p>
      <pre>
        <code>
          {`
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
          `}
        </code>
      </pre>

      <p>
        When an arrow function has <em>no parameters</em>, use an empty set of
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
