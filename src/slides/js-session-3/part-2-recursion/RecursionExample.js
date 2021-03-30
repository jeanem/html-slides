import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Let's look at an example of recursion.</p>
      <p>
        We're going to invite some friends to a picnic. If we are inviting one
        friend or more to our picnic, we we gather our friends. So if we are
        inviting 3 friends, picnic counts down by 1 from the total number of
        friends until we get to 0. Each time that happens, we add an ant friend.
      </p>
      <p>
        The output is our picnic: a basket <span className="emoji">🧺</span>, a
        sandwich <span className="emoji">🥪</span>, and an apple
        <span className="emoji">🍎</span>. And I guess in this example we are an
        ant <span className="emoji">🐜</span>. And then all of our invited
        friends are with us at the picnic.
      </p>
      <p>
        Paste this code into your browser console and watch the Sources tab in
        Chrome or the Debugger tab in Firefox.
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
