import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        <strong>Single pointer</strong>: one touch point and no movement away
        from the point
      </p>
      <ul>
        <li>Single point touch: taps, double taps, long presses</li>
        <li>
          Single point mouse, trackpad, head-pointer: single clicks,
          click-and-hold and double clicks
        </li>
      </ul>
      <p>
        The zooming and panning functionality of online maps are an example.
        Typically these tasks can be accomplished with multi-point gestures
        (pinch/zoom, point/drag.) The single point option would be a button for
        zooming in, another for zooming out and a set of buttons for each
        direction a map may be panned: up, down, left and right.
      </p>
    </div>
  );
}

export default Slide;
