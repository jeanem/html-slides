import React from 'react';

function Slide(props) {
  return (
    <div>
      <blockquote cite="Secrets of the JavaScript Ninja, page 90">
        A closure is [2] the scope created when [1] a function is declared that
        [3] allows the function to access and manipulate variables that are
        external to that function.
      </blockquote>
      <h3>A closure</h3>

      <pre>
        <code>
          {`let outerValue = 'strawberry 🍓'; 
function myFunction() {
 console.log('The external outerValue is: ' + outerValue); // 
}
myFunction();
`}
        </code>
      </pre>

      <h3>A closure with a function scope</h3>
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
    console.log(' The external outerValue is: ' + outerValue);
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
