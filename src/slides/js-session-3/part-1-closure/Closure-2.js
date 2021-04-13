import React from 'react';
var icons = {
  fontSize: '2em',
};
function Slide(props) {
  return (
    <div>
      <h3>Scenario and requirements</h3>
      <p>
        A journalist is frequently called on to travel at a minute's notice to
        places all over the country to report on the news.
      </p>
      <ul>
        <li>
          the journalist would like to program her robot{' '}
          <span style={icons}>🤖 </span> prepack a set of Go Bags{' '}
          <span style={icons}>🎒</span> with location-based clothes and gear{' '}
        </li>
        <li>
          she returns to the same areas often so would like multiple
          location-based pre-packed bags, but doesn't want to tell the robot
          which basics to include with every one
        </li>
        <li>
          and she wants the robot to be able to throw in last-minute items at
          her request
        </li>
      </ul>
      <hr />
      <h3>Use cases</h3>
      <p>For example she may want </p>
      <ul>
        <li>
          a Seattle bag <span style={icons}>🎒</span> prepacked with an umbrella
          and other Seattle-specific items <span style={icons}>🌂 ...</span>
        </li>
        <li>
          and later throw in a notepad and pen <span style={icons}> 💻</span>{' '}
        </li>
      </ul>
      <p>Or </p>
      <ul>
        <li>
          a Florida bag <span style={icons}>🎒</span> prepacked with sunglasses
          and other Florida-specific items <span style={icons}>🕶 ...</span>
        </li>
        <li>
          and later throw in a notebook <span style={icons}>📘</span>{' '}
        </li>
      </ul>
      <hr />
      <h3>The function</h3>
      <pre>
        <code>
          {`function goBags(label, basics) {
  // ... 🤖 pre-packing ...
  let message1 = label + ' Go Bag 🎒 is prepacked with: ' + basics;
  console.log(message1);
  function addItemsLater(itemsToAdd) {
    // ... 🤖 throwing in last minute items ...
    let message2 = '. Last-minute items include: ' + itemsToAdd;
    console.log(message1 + message2);
  }
  return addItemsLater;
}
// 🤖 prepacks these bags
let seattleBag = goBags('Seattle', '🌂 ...');
let floridaBag = goBags('Florida', '🕶 ...');

seattleBag('💻');
floridaBag('📘 ');
seattleBag('🥾');

`}
        </code>
      </pre>
      <p>
        <a href="/js-session-3-functions/examples/closure-2.html" target="_new">
          Go Bags function playground
        </a>
      </p>
    </div>
  );
}

export default Slide;
