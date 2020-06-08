import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Bindings (or variables) allow a program to remember things and track its
        state (its current values)
      </p>

      <p className="w-CodeCaption">
        A binding is declared with a special statement. In this example the
        keyword <em>let</em> is used to declare a scoped binding.
      </p>
      <pre>
        <code>{`let five = 5;`}</code>
      </pre>

      <p className="w-CodeCaption">
        A binding points at value which can be disconnected and reassigned
      </p>
      <pre>
        <code>{`let five = 5;
five = 6;`}</code>
      </pre>
      <p>
        A program's environment consists of the set of bindings defined by the
        programmer as well as standard bindings provided by JavaScript
      </p>
    </div>
  );
}

export default Slide;
