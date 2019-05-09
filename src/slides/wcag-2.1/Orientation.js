import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          May be a more common issue currently in native apps, since there are
          straight-forward methods to do so
        </li>
        <li>
          Web does has Screen.lockOrientation() but only works in Firefox OS and
          Firefox for Android
        </li>
        <li>
          An example of an exception is a deposit app for a bank check which
          needs landscape mode to capture image of check
        </li>
      </ul>
    </div>
  );
}

export default Slide;
