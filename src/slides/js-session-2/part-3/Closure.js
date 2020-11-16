import React from 'react';

function Slide(props) {
  return (
    <div>
      <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
        A closure is the combination of a function bundled together (enclosed)
        with references to its surrounding state (the lexical environment).{' '}
        <strong>
          In other words, a closure gives you access to an outer function’s
          scope from an inner function.
        </strong>{' '}
        In JavaScript, closures are created every time a function is created, at
        function creation time. -{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
          MDN Closures
        </a>
      </blockquote>{' '}
      <h3>Example within global scope</h3>
      <pre>
        <code>
          {`let outerValue = 'strawberry 🍓'; 

function myFunction() {
 console.log('The outerValue is: ' + outerValue);
}
myFunction();
`}
        </code>
      </pre>
      <h3>Example within a function scope</h3>
      <p>
        An inner function can access the value in the outer function that cannot
        be accessed globally, in essence it will be private.
      </p>
      <pre>
        <code>
          {`let sometimeLater;

function outerFunction() {
  let outerValue = 'pineapple 🍍';
  function innerFunction() {
    console.log('The outerValue is:' + outerValue);
  }
  sometimeLater = innerFunction;
}
outerFunction();
sometimeLater();
`}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
