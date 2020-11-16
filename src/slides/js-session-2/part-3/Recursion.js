import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>A function that calls itself</li>
        <li>
          Useful for walking thru tree structures where depth is unknown or
          there are multiple branches
        </li>
        <li>If data is highly structured, loops are more efficient option</li>
      </ul>

      <pre>
        <code>{`function inviteFriends(n) {
  let picnic;
  if (n > 1) {
    picnic = inviteFriends(n - 1) + ' 🐜 ';
  } else {
    picnic = '🧺 🥪 🍎   🐜 ';
  }
  return picnic;
}
inviteFriends(3);`}</code>
      </pre>
    </div>
  );
}

export default Slide;
