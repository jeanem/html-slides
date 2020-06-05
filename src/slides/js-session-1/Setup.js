import React from 'react';

function Slide(props) {
  return (
    <div>
      <ol>
        <li>
          Open the slides
          <pre>
            <code>url for slides</code>
          </pre>
        </li>
        <li>
          On that page open the web console
            <ul>
            <li>Chrome: <code>Ctrl Shift J (on Windows) or Ctrl Option J (on Mac)</code></li>
            <li>Firefox:<code> Ctrl Shift K (on Windows) or Command Option K on OS X (on Mac)</code></li>
            </ul>
        </li>
        <li>
          In another tab open up <a href="https://eloquentjavascript.net/01_values.html">Eloquent Javascript chapter 1</a>
        </li>
      </ol>
    </div>
  );
}

export default Slide;
