import React from 'react';
import Img from '../images/cover.jpg';
function Slide() {
  return (
    <div>
      <p>November 17, 2020</p>

      <img src={Img} alt="test" width="25%" align="right" />
      <p>
        <strong>
          Welcome to Front End Tech Book Club! We will begin momentarily.{' '}
        </strong>
      </p>

      <p>
        In the meantime, please open the following in two separate tabs in your
        browser
      </p>
      <ul>
        <li>
          Slide deck:{' '}
          <a href="https://uw-cop-frontend.github.io/js-session-2/">
            <strong>https://uw-cop-frontend.github.io/js-session-2/</strong>
          </a>
        </li>
        <li>
          Eloquent JavaScript:{' '}
          <a href="https://eloquentjavascript.net">
            <strong>https://eloquentjavascript.net</strong>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Slide;
