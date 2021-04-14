import React from 'react';

function Slide(props) {
  return (
    <div>
      <h3>Examples</h3>

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
