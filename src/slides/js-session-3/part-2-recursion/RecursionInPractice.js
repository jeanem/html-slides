import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Any recursive function can be written as a loop and any loop can be
        written as a recursive function. Which is better is up to you as the
        developer to decide.
      </p>
      <p>
        In theory, a general rule of thumb in JS recursion is 3x slower than
        looping.
      </p>
      <p>
        In practice, there will not be a noticible performance difference
        between the two approaches.
      </p>
      <p>
        Bottom line: Write code that will be friendly for other developers to
        read (or you in 6 months when you have to change something and have
        forgotten all about the current project)
      </p>
    </div>
  );
}

export default Slide;
