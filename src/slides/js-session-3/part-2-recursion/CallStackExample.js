import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Before we switch focus to recursion, let's look at an example of the
        call stack.
      </p>
      <p>
        Follow along: Paste this code into your browser console and watch the
        Sources tab in Chrome or the Debugger tab in Firefox.
      </p>
      <pre>
        <code>
          {`
function countDownFrom(number) {
	if (number === 0) {
		return;
	}

	console.log(number);

	debugger;

	countDownFrom(number - 1);
}

countDownFrom(12);
         `}
        </code>
      </pre>
      <p>
        Example source:
        <a href="https://www.freecodecamp.org/news/quick-intro-to-recursion/">
          freeCodeCamp
        </a>
      </p>
    </div>
  );
}

export default Slide;
