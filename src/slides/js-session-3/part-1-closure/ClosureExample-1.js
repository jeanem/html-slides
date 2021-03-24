import React from 'react';
var icons = {
  fontSize: '2em',
};
function Slide(props) {
  return (
    <div>
      <p>TODO: add attribution to pack your bag article</p>
      <h3>Scenario</h3>
      <p>
        A journalist is frequently called on to travel at a minute's notice to
        places all over the country to report on the news.
      </p>
      <p>
        She would like to program her robot <span style={icons}>🤖 </span>{' '}
        prepack a set of Go Bags <span style={icons}>🎒</span> with weather
        related clothes and gear.{' '}
      </p>
      <p>For example she may have a bag prepacked for a </p>
      <ul>
        <li>
          a cold location <span style={icons}>🎒 + ❄</span>
        </li>
        <li>
          with coat, boots, a top and long pants{' '}
          <span style={icons}>🧥 👢 👚 👖 </span>
        </li>
      </ul>
      <p>Or </p>
      <ul>
        <li>
          a warm location <span style={icons}>🎒 + 🌞</span>
        </li>
        <li>
          with tank top, shorts, swimsuit hat and sunglasses{' '}
          <span style={icons}>🎽 🩳 🩱 👒 🕶 </span>
        </li>
      </ul>
      <p>Let's create a function that will program the robot to do that: </p>
      <pre>
        <code>
          {`
function goBag(basics) {
  // ... 🤖 packing ...
  message = 'Go Bag 🎒 prepacked with: ' + basics;
  return message;
}

goBag('🧥 👢 👚 👖');
// returns: "Go Bag 🎒 prepacked with: 🧥 👢 👚 👖"

`}
        </code>
      </pre>
      <p>However</p>
      <ul>
        <li>
          she knows same weather-based pre-packed bags, but doesn't want to tell
          the robot which basics to include with every one
        </li>
        <li>
          and she wants the robot to be able to throw in last-minute items
        </li>
      </ul>
      <pre>
        <code>
          {`

function goBag(label, basics) {
  // ... 🤖 packing ...
  let message1 = label + ' Go Bag 🎒 is prepacked with: ' + basics;
  console.log(message1)

  function addItemsLater(itemsToAdd) {
    // ... 🤖 throwing in last minute items ...
    let message2 =  '. Last-minute items include: ' + itemsToAdd;
    console.log(message1 + message2);
  }
  return addItemsLater;
}

let coldGoBag = goBag('Cold Weather', '🧥 👢 👚 👖');
let warmGoBag = goBag('Warm Weather', '🎽 🩳 🩱 👒 🕶');

coldGoBag('📷 📘 🖊');
warmGoBag('💻 👗 👡');
coldGoBag('💻 🧣 🧤 🥾');

`}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
