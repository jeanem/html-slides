import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        The type of the value (that chunk of bits) determines what it's role
        will be.
      </p>
      <p className="w-CodeCaption">
        For example that binary number for 13 may be interpreted as a number
      </p>

      <pre>
        <code>
          {`typeof parseInt("00001101", 2) 
"number"`}
        </code>
      </pre>
      <p className="w-CodeCaption">Or a string</p>
      <pre>
        <code>
          {`typeof parseInt("00001101", 2).toString() 
"string"`}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
