import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Write a function <code>{`countBs`}</code> that takes a string as its
        only argument and returns a number that indicates how many uppercase “B”
        characters there are in the string.
      </p>

      <h4>If time or for more challenge:</h4>
      <p>
        Write a function called <code>{`countChar`}</code> that behaves like{' '}
        <code>{`countBs`}</code>, except it takes a second argument that
        indicates the character that is to be counted (rather than counting only
        uppercase “B” characters).
      </p>

      <p>Full details of the exercise and hints are at the source below.</p>

      <p>
        Source:{' '}
        <a href="https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do">
          Eloquent JavaScript
        </a>
      </p>
    </div>
  );
}

export default Slide;
