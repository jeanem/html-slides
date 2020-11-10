import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>A boolean type has only two possible values: true or false.</p>
      <p className="w-CodeCaption">Example of how one is produced:</p>
      <pre>
        <code>{`3 > 2
returns true
3 < 2
returns false
`}</code>
      </pre>
    </div>
  );
}

export default Slide;
