import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Functions can ...</p>

      <p>produce a side effect which does something</p>
      <pre>
        <code>{`function sideEffect(){
  console.log(🖋️ I am writing to the JavaScript console)
}`}</code>
      </pre>

      <p>return a value</p>
      <pre>
        <code>{`function returnValue(){
  let penquin = '🐧'
  return penquin;
}`}</code>
      </pre>

      <p>or do both</p>
      <pre>
        <code>{`function both(){
  let penquin = '🐧'
  console.log(🖋️ I am writing to the console and returning a penquin)
  return penquin;
}`}</code>
      </pre>

      <blockquote cite="https://eloquentjavascript.net/03_functions.html">
        Functions that create values are easier to combine in new ways than
        functions that directly perform side effects.
      </blockquote>
    </div>
  );
}

export default Slide;
