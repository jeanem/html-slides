import React from 'react';

function Slide(props) {
  return (
    <div>
      <h2>Programs</h2>
      <h3>Expressions and Statements</h3>
      <p>
        A fragment of code that produces a value is called an{' '}
        <strong>expression</strong>:
      </p>
      <pre>
        <code>"Go " + "Dawgs" + "!"; //returns "Go Dawgs!"</code>
      </pre>
      <br></br>
      <p>
        A <strong>statement</strong> is an instruction to do something:
      </p>
      <pre>
        <code>
          if (2 + 3 === 5 )<br></br>
          {'{alert("I equal five")}'}
        </code>
      </pre>
      <br></br>
      <p>
        A <strong>program</strong> is a list of statements (instructions).
      </p>
    </div>
  );
}

export default Slide;
