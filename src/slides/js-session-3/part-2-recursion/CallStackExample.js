import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Let's look at an example of the call stack.</p>
      <p>
        Paste this into your console and watch the Sources tab in Chrome or the
        Debugger tab in Firefox.
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
    </div>
  );
}

export default Slide;
