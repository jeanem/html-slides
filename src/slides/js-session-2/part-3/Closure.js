import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        A closure is a feature which references{' '}
        <q cite="http://phetsims.github.io/scenery/">
          a specific instance of a local binding in an enclosing scope
        </q>
      </p>
      <p>
        <code>Here is my example</code>
      </p>
      <ul>
        <li>specific instance</li>
        <li>local binding</li>
        <li>in an enclosing scope</li>
      </ul>
    </div>
  );
}

export default Slide;
