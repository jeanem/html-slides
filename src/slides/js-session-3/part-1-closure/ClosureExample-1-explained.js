import React from 'react';
import goBag from '../images/goBag.png';
import goBag1 from '../images/goBag1.png';
import goBag2 from '../images/goBag2.png';
import goBag3 from '../images/goBag3.png';
var icons = {
  fontSize: '2em',
};
function Slide(props) {
  return (
    <div>
      <img src={goBag1} alt="test" />
      <br />
      <img src={goBag2} alt="test" />
      <br />
      <img src={goBag3} alt="test" />
      <br />
      <img src={goBag} alt="test" />
    </div>
  );
}

export default Slide;
