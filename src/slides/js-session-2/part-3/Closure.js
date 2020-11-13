import React from 'react';

function Slide(props) {
  return (
    <div>
      <blockquote cite="Secrets of the JavaScript Ninja, page 90">
        A closure is [2] the scope created when [1] a function is declared that
        [3] allows the function to access and manipulate variables that are
        external to that function.
      </blockquote>
      <p>Simple closure</p>

      <pre>
        <code>
          {`let outerValue = 'oranges';
function myFunction() {
  console.log('I can see the external outerValue: ' + outerValue);
}
myFunction();
`}
        </code>
      </pre>
      <pre>
        <code>
          {`[2] let outerValue = 'oranges';
[1] function myFunction() {
  [3] console.log('I can see the external outerValue: ' + outerValue);
}
myFunction();
  `}
        </code>
      </pre>
      <p>
        An inner function can access the value in the outer function that cannot
        be accessed globally, in essence it will be private.
      </p>
      <pre>
        <code>
          {`function outerFunction() {
  let innerValue = 'apples';
  function innerFunction() {
    console.log('When this all started I was hungry for: ', innerValue);
  }
  return innerFunction;
}

let myNewFunction = outerFunction();
myNewFunction();
`}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
