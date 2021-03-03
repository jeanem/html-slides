import React from 'react';

function Slide(props) {
  return (
    <div>
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
          <br></br>
          myFunction(3,5); <br></br>
          {`//`}returns 15
        </code>
      </pre>
    </div>
  );
}

export default Slide;
