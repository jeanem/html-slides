import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Candidates for separate functions include fragments of code that are:
      </p>
      <ul>
        <li>repeated throughout the program</li>
        <li>
          {' '}
          part of a complex calling function (even if they are not repeated)
          <ul>
            <li>aids comprehension of the flow of the complex function</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Slide;
