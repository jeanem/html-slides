import React from 'react';
import Img from '../images/cover.jpg';
import Debugger from '../images/debugger.png';
import Sources from '../images/sources.png';

function Slide() {
  return (
    <div>
      <img
        src={Img}
        alt="Eloquent JavaScript book cover"
        width="25%"
        align="right"
      />
      <p>
        <strong>
          Welcome to the Front-end Tech Book Club! We will begin momentarily.{' '}
        </strong>
      </p>

      <h3>Your setup for the session:</h3>
      <ol>
        <li>
          open slide deck in one tab:
          <br />
          <a href="https://uw-cop-frontend.github.io/js-session-3/">
            https://uw-cop-frontend.github.io/js-session-3/
          </a>
        </li>
        <li>
          open{' '}
          <a href="https://eloquentjavascript.net" target="_new">
            Eloquent JavaScript
          </a>
        </li>
        <li>
          open{' '}
          <a
            href="https://www.computerhope.com/issues/ch002153.htm"
            target="_new"
          >
            dev tools on your browser
          </a>
        </li>
        <li>open the Console tab</li>
        <li>
          be ready to open the
          <ul>
            <li>
              Debugger tab (Firefox) <br />
              <img
                src={Debugger}
                alt="screenshot of Firefox dev tools with Console and Debugger highlighted"
              />
            </li>
            <li>
              {' '}
              OR Sources tab (Chrome)
              <br />
              <img
                src={Sources}
                alt="screenshot of Firefox dev tools with Console and Debugger highlighted"
              />
            </li>
          </ul>
          <code>Esc</code> in both browsers will toggle the Console split screen
          on and off
        </li>
      </ol>
    </div>
  );
}

export default Slide;
