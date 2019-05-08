import React from 'react';

function Slide(props) {
  const { shortWCAGLink } = props;
  return (
    <div className="w-SlideBody">
      <blockquote cite={shortWCAGLink}>
        The size of the target for pointer inputs is at least 44 by 44 CSS
        pixels
      </blockquote>
      <h3>Example of target size</h3>
      <ul className="w-BtnSet">
        <li>
          <button type="button" className="w-BtnBase">
            1
          </button>
        </li>
        <li>
          <button type="button" className="w-BtnBase">
            2
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Slide;
