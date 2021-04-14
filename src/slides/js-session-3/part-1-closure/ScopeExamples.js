import React from 'react';

function Slide(props) {
  return (
    <div>
      <h3>Examples</h3>
      <p>
        <strong>Scenario 1</strong>: You wish to go to the museum{' '}
        <span role="img" aria-label="museum" style={{ fontSize: '70px' }}>
          🏛
        </span>{' '}
        to see a famous painting{' '}
        <span role="img" aria-label="painting" style={{ fontSize: '50px' }}>
          🖼
        </span>{' '}
        .
      </p>
      <p>You can only see the painting if the museum is open.</p>

      <pre>
        <code>
          {`// Initialize global variables
let open = true;
let museum = "🏛";

if (open) {
  // Initialize a block-scoped variable
  let painting = "🖼";
  console.log("The " + museum + "is open. Enjoy the " + painting);
}

//console.log("The museum is closed. " + painting);
        `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
