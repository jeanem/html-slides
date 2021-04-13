import React from 'react';

function Slide(props) {
  return (
    <div>
      <ol>
        <li>Closure with a review of scope</li>
        <li>The call stack</li>
        <li>Recursion</li>
        <li>Breakout for recursion exercise</li>
      </ol>
      <p>
        Marijn Haverbeke's book,{''}{' '}
        <a href="https://eloquentjavascript.net/" target="_new">
          Eloquent Javascript
        </a>{' '}
        is our guide.
      </p>
      <p>
        Slide deck:{' '}
        <a href="https://uw-cop-frontend.github.io/js-session-3/" target="_new">
          https://uw-cop-frontend.github.io/js-session-3/
        </a>
      </p>
    </div>
  );
}

export default Slide;
