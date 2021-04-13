import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Let's go a little deeper into recursion with this example.</p>
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
    debugger;
    picnic = inviteFriends(n - 1) + ' 🐜 ';
  } else {
    debugger;
    picnic = '🧺 🥪 🍎   🐜 ';
  }
  return picnic;
}

inviteFriends(3);
// 🧺 🥪 🍎   🐜 🐜 🐜 🐜
         `}
        </code>
      </pre>
      <p>
        We're having a picnic! What do you always have with picnics? Ants. And,
        where there's one ant, they are usually bringing their friends.
      </p>
      <p>
        The output of our example function is our picnic: a basket
        <span className="emoji"> 🧺</span>, a sandwich
        <span className="emoji"> 🥪</span>, and an apple
        <span className="emoji"> 🍎</span>. There's at least one
        <span className="emoji"> 🐜</span> whether we like it or not. How many
        friends did they bring with them?
      </p>
    </div>
  );
}

export default Slide;
