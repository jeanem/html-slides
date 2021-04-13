import React from 'react';

function Slide(props) {
  return (
    <div>
      <h2>Programs</h2>
      <h3>Bindings</h3>
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
        Bindings can be created using the keywords <strong>let</strong>,{' '}
        <strong>var</strong>, or <strong>const</strong>.{' '}
      </p>
      <p>
        <strong>What are the differences?</strong>
      </p>
      <ul>
        <li>
          var bindings are globally scoped or function/locally scoped. They can
          also be re-declared and updated<br></br>
        </li>
        <li>
          a let binding declared in a block of code is only available for use
          within that block. It can only be updated, not re-declared.
        </li>
        <li>
          A binding using <strong>const</strong> is similar to one declared with
          let, but will hold the same value for as long as it lives.
        </li>
      </ul>
      <p></p>
    </div>
  );
}

export default Slide;
