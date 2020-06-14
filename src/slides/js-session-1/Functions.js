import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          a special value that contains and encloses/wraps/encapsulates a part
          of the program
        </li>
        <li>can be executed/run/invoked/called with an expression</li>
      </ul>
      <pre>
        <code>{`let blue = function() {
    // ... [statement] ...
    // ... [statement] ...
    alert("hello"); // side effect
    return "blue";  // value produced
  }`}</code>
      </pre>

      <figure role="img" aria-labelledby="function">
        <figcaption id="function">
          An example of a function called in the control flow of a program
        </figcaption>
        <pre>
          {`[statement]  blue();  [statement]  blue();  [statement]
+--------------------------------------------------------->

`}
        </pre>
      </figure>
    </div>
  );
}

export default Slide;
