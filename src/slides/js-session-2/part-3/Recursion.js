import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>A function that calls itself</li>
        <li>
          Useful walking tree structures where depth and is unknown or multiple
          branches
        </li>
        <li>
          Loops work well with highly structured data and are more efficient
        </li>
      </ul>

      <pre>
        <code>{`function createPicnic(n) {
  let picnic;
  if (n > 1) {
    picnic = createPicnic(n - 1) + ' 🐜 ';
  } else {
    picnic = '🧺 🥪 🍎   🐜 ';
  }
  return picnic;
}
picnic(3);`}</code>
      </pre>
    </div>
  );
}

export default Slide;
