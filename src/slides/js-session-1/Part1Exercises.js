import React from 'react';

function Slide(props) {
  return (
    <div>
      <h3>Group 1: Operators</h3>
      <ul>
        <li>
          Skim the sections on operators in chapter one (it starts with the{' '}
          <a href="https://eloquentjavascript.net/01_values.html#h_ygn12/ieo+">
            unary operators section
          </a>
          ){' '}
        </li>
        <li>
          look at{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators">
            MDN list
          </a>
        </li>
        <li>report back on a few interesting operators and what they do</li>
      </ul>

      <h3>Group 2: Automatic type conversion</h3>
      <ul>
        <li>
          Review the section on{' '}
          <a href="https://eloquentjavascript.net/01_values.html#h_AY+YGu6qyM">
            automatic type conversion
          </a>{' '}
          and report back on your findings
        </li>
      </ul>

      <h3>Group 3: Numbers</h3>
      <ul>
        <li>
          Read the{' '}
          <a href="https://eloquentjavascript.net/01_values.html#h_flOCH3CuFg">
            intro section on numbers
          </a>{' '}
          and explain why some fractions may not be precise
        </li>
        <li>
          Read the section on{' '}
          <a href="https://eloquentjavascript.net/01_values.html#i_R4eFf8w7Yz">
            special numbers
          </a>{' '}
          - what are they?
        </li>
        <li>
          If time, explore the{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt">
            BigInt object
          </a>
          . How does it help with super-large numbers? What are its limitations?
        </li>
      </ul>
    </div>
  );
}

export default Slide;
