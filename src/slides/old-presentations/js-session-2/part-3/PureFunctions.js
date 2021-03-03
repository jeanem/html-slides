import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>a pure function is</p>
      <ul>
        <li>is value-producing</li>
        <li>has no side-effects</li>
        <li>and doesn’t rely on side effects of other code</li>
        <li>always produces the same code when called with same arguments</li>
        <li>the foundation of functional programming</li>
      </ul>

      <pre>
        <code>
          {`function emojiMixer(emoji1, emoji2){
  let together = 'This string concatenates the first emoji: ' + emoji1 + ' and the second emoji: ' + emoji2
  return together;
}
emojiMixer('🐝','🐞');
        `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
