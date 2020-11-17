import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        How can we use the values created in our expressions? <br></br>A
        <strong> binding</strong>, or variable, can grab the new value and store
        it for later use.
      </p>
      <pre>
        <code>
          let mood = "light"; <br></br>
          console.log(mood); <br></br>
          {'// → light'}
          <br></br>
          mood = "dark";<br></br>
          console.log(mood);<br></br>
          {'// → dark'}
        </code>
      </pre>

      <p>
        Bindings can be created using the keywords <code>let</code>, or{' '}
        <code>const</code>, or <code>var</code>.{' '}
      </p>
      <p>
        <strong>What are the differences?</strong>
      </p>
      <ul>
        <li>
          a <code>let</code> binding declared in a block of code is only
          available for use within that block. It can only be updated, not
          re-declared
        </li>
        <li>
          a binding using <code>const</code> is similar to one declared with{' '}
          <code>let</code>, but will hold the same value for as long as it lives
        </li>
        <li>
          <code>var</code> bindings are globally scoped or function/locally
          scoped. They can also be re-declared and updated
        </li>
      </ul>
      <p></p>
    </div>
  );
}

export default Slide;
