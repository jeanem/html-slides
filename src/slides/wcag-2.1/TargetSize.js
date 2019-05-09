import React from 'react';

function Slide(props) {
  return (
    <div>
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
