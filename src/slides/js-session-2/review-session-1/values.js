import React from 'react';

function Slide(props) {
  return (
    <div>
      <h3>Four types of values: </h3>
      <ul>
        <li>Numbers</li>
        <li>
          Strings
          <ul>
            <li>"word" or "here is a phrase" or "100"</li>
            <li>'this string is in singlequotes'</li>
            <li>`this one is in backticks`</li>
          </ul>
        </li>
        <li>
          Booleans
          <ul>
            <li>TRUE or FALSE</li>
          </ul>{' '}
        </li>
        <li>
          Undefined values
          <ul>
            <li>null</li>
            <li>empty value</li>
            <li>undefined</li>
          </ul>{' '}
        </li>
      </ul>
    </div>
  );
}

export default Slide;
