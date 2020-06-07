import React from 'react';

function Slide() {
  return (
    <div>
      <p className="w-CodeCaption">
        The string type represents text and is enclosed in double quotes, single
        quotes or backticks
      </p>
      <pre>
        <code>{`"I am a string"
'And I am a string'
\`Also a string\``}</code>
      </pre>

      <p className="w-CodeCaption">Backticks allow newlines without escaping</p>
      <pre>
        <code>{`\`Line one
Line two\``}</code>
      </pre>
      <p className="w-CodeCaption">
        Otherwise you need to use the newline characters "\n"
      </p>
      <pre>
        <code>{`"Line one \\n
Line two"`}</code>
      </pre>
    </div>
  );
}

export default Slide;
