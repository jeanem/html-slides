import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        A loop allows us go back in the program and repeat. An example might be
        to print a set of numbers without having to explicitly write out each
        statement.
      </p>
      <p>
        Javascript provides a For loop for this type of processing. It includes:
      </p>
      <ul>
        <li>a counter binding</li>
        <li>
          a test expression for the loop that decides if it continues or not
        </li>
        <li>an update to the counter at the end of each iteration</li>
      </ul>
      <pre>
        <code>{`for (let i = 0; i <= 10; ++i) {  
  console.log(i);
}`}</code>
      </pre>
    </div>
  );
}

export default Slide;
