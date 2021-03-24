import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Let's look at an example of recursion.</p>
      <p>
        Paste this code into your console and watch the Sources tab in Chrome or
        the Debugger tab in Firefox.
      </p>
      <pre>
        <code>
          {`
function inviteFriends(n) {
	let picnic;
	if (n >= 1) {
		picnic = inviteFriends(n - 1) + ' 🐜 ';
	} else {
		picnic = '🧺 🥪 🍎   🐜 ';
	}
	return picnic;
}
inviteFriends(3);
         `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
