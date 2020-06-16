import React from 'react';

function Slide() {
  return (
    <div>
      <p className="w-CodeCaption">
        The string type represents text and is enclosed in double quotes, single
        quotes or back ticks
      </p>
      <pre>
        <code>{`"I am a string"
'And I am a string'
\`Also a string\``}</code>
      </pre>

      <p className="w-CodeCaption">
        Strings that have back ticks are called template literals. You can embed
        an expression within them that resolves to a string.
      </p>
      <pre>
        <code>{`\`I am holding $\{3 + 5} apples\``}</code>
      </pre>
      <p>Produces:</p>
      <pre>
        <code>{`\`I am holding ${3 + 5} apples\``}</code>
      </pre>
      <p className="w-CodeCaption">
        Template literals also allow you to create multi-line strings without
        using a newline character.
      </p>
      <pre>
        <code>{`\`Line one
 Line two\``}</code>
      </pre>
      <p className="w-CodeCaption">Rather than:</p>
      <pre>
        <code>{`"Line one \\n
 Line two"`}</code>
      </pre>
    </div>
  );
}

export default Slide;
