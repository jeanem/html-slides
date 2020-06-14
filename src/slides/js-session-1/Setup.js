import React from 'react';

function Slide(props) {
  return (
    <div>
      <ol>
        <li>
          Open the slides{' '}
          <strong>https://uw-cop-frontend.github.io/js-session-1/</strong>
        </li>
        <li>
          On that page open the web console
          <ul>
            <li>
              Chrome: <code>Ctrl Shift J (Windows) or Ctrl Option J (Mac)</code>
            </li>
            <li>
              Firefox:
              <code>Ctrl Shift K (Windows) or Command Option K (Mac)</code>
            </li>
          </ul>
        </li>
        <li>
          In another tab open up{' '}
          <a href="https://eloquentjavascript.net/01_values.html">
            Eloquent Javascript chapter 1
          </a>
        </li>
        <li>Following along interactively</li>
      </ol>
    </div>
  );
}

export default Slide;
