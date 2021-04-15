import React from 'react';

var icons = {
  fontSize: '2em',
};

function Slide(props) {
  return (
    <div>
      <h3>Where are closures useful?</h3>
      <ul>
        <li>
          callbacks and timers, when you need to access outside data at another
          time
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#practical_closures">
                MDN practical closures
              </a>
            </li>
          </ul>
        </li>
        <li>
          in approximating private variables and methods like those used in
          other languages
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures">
                MDN private methods with closure
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <h3>Performance implications</h3>
      <ul>
        <li>
          Unneeded closures can affect processing speed and memory consumption
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#performance_considerations">
                MDN performance considerations
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <p className="w-Note">
        Examples in this closure section based on{' '}
        <a href="https://blog.codeanalogies.com/2018/10/19/javascript-closures-explained-by-mailing-a-package/">
          JavaScript closures explained by mailing a package
        </a>
      </p>
    </div>
  );
}

export default Slide;
