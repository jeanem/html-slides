import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        An if/else statement is one example of a conditional statement. It
        allows code to be executed only if a certain condition is true.
      </p>
      <p>
        The if/else statement includes a combination of keywords (if, else if,
        else) and the statements to be executed.
      </p>
      <pre>
        <code>{`let weather = "";
if (weather === "warm") {
  console.log("Go outside");
} else if (weather === "hot") {
  console.log("Go to beach");
} else {
  console.log("Stay home");
}`}</code>
      </pre>
    </div>
  );
}

export default Slide;
