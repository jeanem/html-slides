import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Main accessibility challenges for SPAs are because of the dynamic
        content injection and changing context so:
      </p>
      <ul>
        <li>Communicate each new visual page via routing</li>
        <li>Ensure keyboard navigation makes sense with injected content</li>
        <li>
          Focus management, take care it is not lost or placed unexpectedly -
          use framework specific methods
        </li>
        <li>Aria-live and tabindex: use correctly and don't over-use</li>
        <li>
          Take care when incorporating a third-party pre-made UI
          component/modules: notoriously not accessible
        </li>
      </ul>
      <blockquote>
        Like any application with a user interface, SPA developers also need to
        be schooled in WAI-ARIA and accessible development - Jeane
      </blockquote>
    </div>
  );
}

export default Slide;
