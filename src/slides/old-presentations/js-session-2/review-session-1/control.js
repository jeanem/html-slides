import React from 'react';

function Slide(props) {
  return (
    <div>
      <h3>Control the flow </h3>
      <p>
        Statements are executed from top to bottom. You can change the flow of
        execution by using conditional (if, else, and switch) and looping
        (while, do, and for) statements.
      </p>

      <h4>If/Else statements</h4>
      <pre>
        <code>
          {`if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}`}
        </code>
      </pre>
      <br></br>
      <h4>For loops </h4>
      <pre>
        <code>
          {`for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera
`}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
