import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>Mobile is a focus, e.g. responsive design is a requirement</li>
        <li>
          Improves accessibility for users who have cognitive or learning
          disabilities as well as those that use input devices beyond the
          keyboard
        </li>
        <li>
          WCAG 2.0 is still a W3C Recommendation, 2.1 extends it and is
          backwards compatible
        </li>
      </ul>
      <div className="w-SlideReferences">
        <p>
          This presentation highlights a sub-set of new WCAG 2.1 checkpoints.
          For more information on all checkpoints see{' '}
          <a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">
            New features in WCAG 2.1
          </a>
        </p>
      </div>
    </div>
  );
}

export default Slide;
