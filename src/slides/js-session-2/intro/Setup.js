import React from 'react';

function Slide(props) {
  return (
    <div>
      <ol>
        <li>
          Open the slides{' '}
          <strong>
            <a href="https://uw-cop-frontend.github.io/js-session-2-functions/">
              https://uw-cop-frontend.github.io/js-session-2-functions/
            </a>
          </strong>
        </li>
        <li>
          On that page open the web console
          <ul>
            <li>
              Chrome: <code>Ctrl Shift J (Windows) or Ctrl Option J (Mac)</code>
            </li>
            <li>
              Firefox:{' '}
              <code>Ctrl Shift K (Windows) or Command Option K (Mac)</code>
            </li>
          </ul>
        </li>
        <li>
          In another tab open up{' '}
          <strong>
            <a href="https://eloquentjavascript.net/03_functions.html">
              Eloquent Javascript chapter 3
            </a>
          </strong>
        </li>
        <li>Following along interactively!</li>
      </ol>
    </div>
  );
}

export default Slide;
