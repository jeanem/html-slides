import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          <p className="w-CodeCaption">
            Operators performs an action on values to produce a result.
          </p>
          <pre>
            <code>{`1 + 3
2 - 1`}</code>
          </pre>
        </li>
        <li>
          <p className="w-CodeCaption">
            Most operators are symbols but a few are words
          </p>
          <pre>
            <code>{`typeof 10`}</code>
          </pre>
        </li>
        <li>The operand is the input/value that is operated on</li>
      </ul>
    </div>
  );
}

export default Slide;
