import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Because function bindings simply act as a name for a specific piece of
        the program, it can be handy to redefine the action associated with that
        binding.
      </p>
      <pre>
        <code>{`let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}`}</code>
      </pre>
    </div>
  );
}

export default Slide;
