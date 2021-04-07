import React from 'react';

var icons = {
  fontSize: '2em',
};

function Slide(props) {
  return (
    <div>
      <h2>Where are closures useful?</h2>
      <ul>
        <li>
          in approximating private variables like those used in other languages
        </li>
        <li>
          callbacks and timers, when you need to access outside data at another
          time
        </li>
        <h2>
          What impact does closure have on the JavaScript language itself?
        </h2>
        <li>forcing function context</li>
        <li>partially applying functions</li>
        <li>overriding function behavior</li>
        <li>immediate functions</li>
      </ul>
    </div>
  );
}

export default Slide;
