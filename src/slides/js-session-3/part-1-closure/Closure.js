import React from 'react';

function Slide(props) {
  return (
    <div>
      <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
        A closure is the combination of a function bundled together (enclosed)
        with references to its surrounding state (the lexical environment).{' '}
      </blockquote>
      <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
        <strong>
          In other words, a closure gives you access to an outer function’s
          scope from an inner function.
        </strong>{' '}
      </blockquote>
      <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
        In JavaScript, closures are created every time a function is created, at
        function creation time. -{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
          MDN Closures
        </a>
      </blockquote>{' '}
    </div>
  );
}

export default Slide;
