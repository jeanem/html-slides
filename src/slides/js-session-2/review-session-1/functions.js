import React from 'react';

function Slide(props) {
  return (
    <div>
      <h2>Programs</h2>
      <h3>Functions</h3>
      <p>
        A function is a block of code designed to perform a particular task. The
        program runs when it is called.
      </p>
      <pre>
        <code>
          function myFunction(a, b)<br></br>{' '}
          {`{
    return a * b;
 }`}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
