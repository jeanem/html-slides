import React from 'react';

function Slide(props) {
  return (
    <div>
      <h3>Closure</h3>

      <ul>
        <li>
          <a href="https://blog.codeanalogies.com/2018/10/19/javascript-closures-explained-by-mailing-a-package/">
            {' '}
            JavaScript Closures Explained by Mailing a Package
          </a>
        </li>

        <li>
          <a href="https://www.manning.com/books/secrets-of-the-javascript-ninja">
            Secrets of the JavaScript Ninja - all of chapter 5
          </a>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
            Mozilla Developer Network (MDN) on Closure
          </a>
        </li>
      </ul>

      <h3>Call stack, recursion resources:</h3>
      <ul>
        <li>
          <a href="https://www.freecodecamp.org/news/quick-intro-to-recursion/">
            A Quick Intro to Recursion in JavaScript at freeCodeCamp
          </a>
        </li>
        <li>
          <a href="https://javascript.info/recursion">
            Recursion and stack at JavaScript.info
          </a>
        </li>
      </ul>

      <h3>Recursion advanced reading:</h3>

      <ul>
        <li>
          <a href="https://pragprog.com/titles/jwdsal2/a-common-sense-guide-to-data-structures-and-algorithms-second-edition/">
            <em>A Common-Sense Guide to Data Structures and Algorithms</em> by
            Jay Wengrow, chapters 10-13
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Slide;
