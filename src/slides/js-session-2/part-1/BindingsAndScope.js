import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Each binding in a program has a scope</p>
      <h3>Global</h3>
      <div>
        Bindings defined outside of a function or block are scoped globally and
        available to the whole program
      </div>
      <h3>Local</h3>
      <p>
        Bindings created inside a block or function are scoped to that block.
        Each time that function is called, fresh instances of those variables
        are created in memory.
      </p>
      <h3>Keyword Behavior</h3>
      <ul>
        <li>Let - Scoped to block</li>
        <li>Const - Scoped to block</li>
        <li>
          Var - Older style binding are either scoped globally or function
        </li>
      </ul>
      <pre>
        <code>{`let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40`}</code>
      </pre>
    </div>
  );
}

export default Slide;
