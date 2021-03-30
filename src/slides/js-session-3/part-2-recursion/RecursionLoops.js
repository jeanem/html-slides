import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          Recursion is essentially the same as for/while loops but it is
          sometimes more elegant.
        </li>
        <li>
          In a loop, there are extra variables to track progress (i). With
          recursion, an extra variable is not needed (call stack).
        </li>
        <li>Recursion is usually shorter than iterative (loops).</li>
        <li>Loops are easier to write and maintain (human-friendly).</li>
      </ul>
      <h3>Example of loops vs recursion</h3>
      <div className="cols">
        <div className="col">
          <p>Loop:</p>
          <pre>
            <code>
              {`
function countDownFrom(number) {
  for (let i = number; i > 0; i--) {
    console.log(i);
  }
}

countDownFrom(5);
// 5
// 4
// 3
// 2
// 1
              `}
            </code>
          </pre>
        </div>
        <div className="col">
          <p>Recursion:</p>
          <pre>
            <code>
              {`
function countDownFrom(number) {
  if (number === 0) {
    return;
  }

    console.log(number);
    countDownFrom(number - 1);
}

countDownFrom(5);
// 5
// 4
// 3
// 2
// 1
              `}
            </code>
          </pre>
        </div>
      </div>
      <p>
        Examples source:
        <a href="https://www.freecodecamp.org/news/quick-intro-to-recursion/">
          freeCodeCamp
        </a>
      </p>
    </div>
  );
}

export default Slide;
