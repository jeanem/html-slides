import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          Allow speech input users the ability to activate events via the visual
          label. In order to do that the visual label must be the same as the
          accessible label or start with the same unique words, e.g. Buy Soap,
          Buy Kleenex, Buy Paper instead of Buy for each button.
        </li>
        <li>
          An accessible name is used by assistive technology to identify the
          control, it may be visual like the label for a form control or the
          text of a link or it may be hidden visually, e.g. aria-label, alt tag,
          aria-labelledby
        </li>
        <li>
          Aside for programmers: Name, in this context, is the accessible name{' '}
          <strong>not</strong> the name attribute on input elements
        </li>
      </ul>
    </div>
  );
}

export default Slide;
