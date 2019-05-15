import React from 'react';
const displaySpacing = {
  margin: '.5em'
};
function Slide(props) {
  return (
    <div>
      <h3>Example of target size</h3>
      <ul className="w-BtnSet">
        <li style={displaySpacing}>
          <button type="button" className="w-BtnBase">
            1
          </button>
        </li>
        <li style={displaySpacing}>
          <button type="button" className="w-BtnBase">
            2
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Slide;
