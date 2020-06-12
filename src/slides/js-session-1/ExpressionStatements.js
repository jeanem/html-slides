import React from 'react';

function Slide(props) {
  return (
    <div>
      <p className="w-CodeCaption">An expression produces a value</p>
      <pre>
        <code>{`2 + 3`}</code>
      </pre>

      <p className="w-CodeCaption">A statement performs an action</p>
      <pre>
        <code>{`if (2 + 3 === 5 ){ alert("I equal five") }`}</code>
      </pre>
      <p>And a statement</p>
      <ul>
        <li>may contain more statements</li>
        <li>or contain expressions</li>
        <li>which sometimes contain more expressions</li>
      </ul>
      <blockquote>
        If an expression corresponds to a sentence fragment, a JavaScript
        statement corresponds to a full sentence.
      </blockquote>
      <p>A program is a list of statements</p>
    </div>
  );
}

export default Slide;
