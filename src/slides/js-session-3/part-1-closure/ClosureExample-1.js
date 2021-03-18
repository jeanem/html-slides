import React from 'react';
var icons = {
  fontSize: '2em',
};
function Slide(props) {
  return (
    <div>
      <p>
        TODO: change scenario to first person "I want a function that will ...",
        I want my robot 🤖, add line breaks to messages (`?) for readibility and
        create image to break apart pieces, add attribution to pack your bag
        article, remove location and keep it focused on weather
      </p>
      <h3>Scenario</h3>
      <p>
        A journalist is frequently called on to travel at a minute's notice to
        known and unknown places to report on the news.
      </p>
      <p>
        They would like to have a set of Go Bags <span style={icons}>🎒</span>{' '}
        prepacked with weather or location related clothes and gear.{' '}
      </p>
      <p>For example they may have a bag prepacked for a </p>
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
      <p>Let's create a function to do this:</p>
      <pre>
        <code>
          {`
function goBag(basics) {
  message = 'A Go Bag 🎒 is prepacked with: ' + basics;
  return message;
}

goBag('🧥 👢 👚 👖');


`}
        </code>
      </pre>
      <p>However they find that</p>
      <ul>
        <li>
          they want to have several of the same location based pre-packed bags,
          but don't want to type in the same items each time
        </li>
        <li>and they want to add items at the last minute</li>
      </ul>
      <pre>
        <code>
          {`

function goBag(label, basics) {
  let message = 'My  ' + label + ' Go Bag 🎒 is prepacked with: ' + basics + '.';
  console.log(message)
  function addItemsLater(itemsToAdd) {
    message =  'These items: ' + itemsToAdd + ' have been added to my ' + label + ' Go Bag 🎒!';
    console.log(message);
  }
  return addItemsLater;
}

let winterGoBag = goBag('Winter', '🧥 👢 👚 👖');
let summerGoBag = goBag('Summer', '🎽 🩳 🩱 👒 🕶');

winterGoBag('📷 📘 🖊');
summerGoBag('💻 👗 👡');
winterGoBag('💻 🧣 🧤 🥾');



// const items = '🧢 🎽 👖 🧦 👟 📘 🖊';


`}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
