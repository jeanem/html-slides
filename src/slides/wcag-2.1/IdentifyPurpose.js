import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          includes use of ARIA Landmarks (which is already a required technique
          for a couple of level A items) to identify regions of the page{' '}
        </li>
        <li>
          goes deeper by using other semantic and microdata markup to add
          context and meaning and purpose to a host of elements: symbols,
          regions, buttons, links, and fields{' '}
        </li>
        <li>
          the goal being to communicate this meaning to a user agent so they can
          make them understandable to the user{' '}
        </li>
      </ul>
    </div>
  );
}

export default Slide;
