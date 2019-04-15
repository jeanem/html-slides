import React from 'react';

function Slide(props) {
  return (
    <div className="w-SlideBody">
      <h3>Resources</h3>
      <ul>
        <li>
          <a href="https://phet-dev.colorado.edu/html/jg-tests/csun-2019/presentation.html">
            Slides
          </a>
        </li>
        <li>
          Documentation
          <ul>
            <li>
              <a href="http://phetsims.github.io/scenery/doc/">Scenery API</a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1Ys1EiwnqQGYuzGOcQSr4uXDes35mF1v1XhMZIl10nk8/edit">
                PhET Development Overview
              </a>{' '}
            </li>
            <li>
              Note that there are setup instructions in both documents. The PhET
              Development Overview appears to be the most current
            </li>
            <li>
              {' '}
              <a href="http://phetsims.github.io/scenery/doc/accessibility.html">
                Accessibility API
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://groups.google.com/forum/?hl=en#!forum/developing-interactive-simulations-in-html5">
            Google groups
          </a>
          : helpful for troubleshooting setup errors
        </li>
      </ul>
    </div>
  );
}

export default Slide;
