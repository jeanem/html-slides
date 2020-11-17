import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        An Immediately Invoked Function Expression (or IIFE - pronounced "iffy")
        is a JavaScript function that runs as soon as it is defined.
      </p>

      <p>It is also known as a Self-Executing Anonymous Function.</p>

      <pre>
        <code>
          {`
(function () {
  statements
})();
        `}
        </code>
      </pre>
      <ol>
        <li>
          The first part is an anonymous function and is enclosed within the
          <code>{`Grouping Operator ()`}</code>. This prevents external access
          to the variables inside the IIFE, as well as polluting the global
          scope.
        </li>
        <li>
          The second part creates the immediately invoked function expression
          <code>{`()`}</code> through which the JavaScript engine will directly
          interpret the function.
        </li>
      </ol>

      <p>
        IIFEs were more common before 2015 when block-level scoping was
        introduced with <code>{`let`}</code> and <code>{`const`}</code>. There
        are a lot of opinions about them and you can learn more about the
        history from
        <a href="https://medium.com/@mikkanthrope/iife-a-mini-lesson-in-javascript-history-feecdd9c02ad">
          IIFE: A mini-lesson in Javascript history
        </a>
        .
      </p>

      <h3>Examples</h3>
      <pre>
        <code>
          {`
(function () {
  var aName = "Barry";
})();
// Variable aName is not accessible from the outside scope
aName // throws "Uncaught ReferenceError: aName is not defined"
        `}
        </code>
      </pre>

      <p>
        We can also assign the IIFE to a variable. The variable only stores the
        function's return value and not the actual function definition.
      </p>

      <pre>
        <code>
          {`
var result = (function () {
  var name = "Barry";
  return name;
})();
// Immediately creates the output:
result; // "Barry"
        `}
        </code>
      </pre>
      <p>
        Source:
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/IIFE">MDN</a>
      </p>
    </div>
  );
}

export default Slide;
