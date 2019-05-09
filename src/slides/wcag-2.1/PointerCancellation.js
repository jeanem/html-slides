import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          There is no down-event, event is only activated on the up event (like
          a standard click event)
        </li>
        <li>
          If there is a down event it can be aborted, undone, or reversed on the
          up event.
        </li>
        <li>
          An exception might be a game or piano app where execution on the down
          event is crucial
        </li>
      </ul>
    </div>
  );
}

export default Slide;
