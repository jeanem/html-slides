import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        JavaScript has function scope: Each function creates a new scope. Scope
        determines the accessibility (visibility) of these variables. Variables
        defined inside a function are not accessible (visible) from outside the
        function.
      </p>
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
      <p>
        <strong>Scenario 2</strong>: You are a person{' '}
        <span role="img" aria-label="person" style={{ fontSize: '70px' }}>
          🧍
        </span>
        . But you suspect you might be a werewolf{' '}
        <span role="img" aria-label="wolf" style={{ fontSize: '50px' }}>
          🐺
        </span>
        .
      </p>
      <p>This is the function that controls your werewolf transformation</p>
      <pre>
        <code>{`let species = "Human 🧍"; //global variable. 
    
function transform() { 
  let species = "Werewolf 🐺 "; //local, function-scoped variable. 
  console.log(species);
}

// Log the global and local variable
console.log(species);
transform();
console.log(species);
    `}</code>
      </pre>
    </div>
  );
}

export default Slide;
