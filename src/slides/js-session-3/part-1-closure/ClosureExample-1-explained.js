import React from 'react';
import goBag from '../images/goBag.png';
import goBag1 from '../images/goBag1.png';
import goBag2 from '../images/goBag2.png';
import goBag3 from '../images/goBag3.png';
var icons = {
  fontSize: '2em',
};
function goBags(label, basics) {
  // ... 🤖 packing ...
  let message1 = label + ' Go Bag 🎒 is prepacked with: ' + basics;
  console.log(message1);

  function addItemsLater(itemsToAdd) {
    // ... 🤖 throwing in last minute items ...
    let message2 = '. Last-minute items include: ' + itemsToAdd;
    console.log(message1 + message2);
  }
  return addItemsLater;
}
let coldGoBag = goBags('Cold Weather', '🧥 👢 👚 👖');
function Slide(props) {
  return (
    <div>
      <button onClick={goBags('Cold Weather', '🧥 👢 👚 👖')}>
        Cold Weather Bag
      </button>
      <button onClick={coldGoBag('📷 📘 🖊')}>
        Items added to Cold Weather Bag
      </button>
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
