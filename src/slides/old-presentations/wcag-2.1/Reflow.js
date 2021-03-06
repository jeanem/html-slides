import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          Vertical scrolling content (horizontally written languages like
          English) at a width equivalent to 320 CSS pixels
        </li>
        <li>
          Horizontal scrolling content (vertically written languages) at a
          height equivalent to 256 CSS pixels
        </li>
        <li>
          Prevents scrolling in more than one direction or hiding content for
          small screens and larger screens zoomed to 400%{' '}
        </li>
        <li>
          Examples of exceptions are maps, data tables, etc. that rely on
          two-dimensional layout or meaning
        </li>
      </ul>
    </div>
  );
}

export default Slide;
