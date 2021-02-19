import React from 'react';
import Img from '../images/cover.jpg';
function Slide() {
  return (
    <div>
      <p>April 20, 2021</p>

      <img src={Img} alt="test" width="25%" align="right" />
      <p>
        <strong>
          Welcome to the Front-end Tech Book Club! We will begin momentarily.{' '}
        </strong>
      </p>

      <p>
        In the meantime, please open the following in two separate tabs in your
        browser
      </p>
      <ul>
        <li>Slide deck:TODO:add link</li>
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
