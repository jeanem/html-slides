import React from 'react';

function Slide() {
  return (
    <div>
      <p>Use operators to transform values</p>
      <ul>
        <li>
          <strong>
            Math:
            <ul>
              <li>multiplication (*) </li>
              <li>division (/)</li>
              <li>addition (+)</li>
              <li>subtraction (-)</li>
              <li>remainder or modulo (%)</li>
            </ul>{' '}
          </strong>
        </li>
        <li>
          <strong>Concatenation: (+)</strong>
          <br></br>
          <pre>
            <code> "Go " + "Dawgs" + "!" //returns "Go Dawgs!"</code>
          </pre>
        </li>
        <li>
          <strong>
            Comparison:
            <ul>
              <li>
                {'>'} (greater than) and {'<'} (less than)
              </li>
              <li>{'==='} (precisely equal to)</li>
              <li>{'!= '} (not equal to),</li>
              <li>...and more</li>
            </ul>{' '}
          </strong>
        </li>
        <li>
          <strong>Logical operators</strong>
          <ul>
            <li>&& (and)</li>
            <li> || (or)</li>
            <li>! (not)</li>
          </ul>
        </li>
        Example:<br></br>
        <pre>
          <code>
            let x = 6, y = 3;<br></br>x {'<'} 10 && y {'>'} 1 //returns true
            <br></br>x === 5 || y === 5 //returns false<br></br>
            !(x === y) //returns true
          </code>
        </pre>
        <li>
          <strong>Ternary operator: ?:</strong> , also called conditional
          operator<br></br>
          <br></br> Think of it as a shorthand for if...else.<br></br>
          <code>condition ? expressionIfTrue : expressionIfFalse</code>
          <br></br>
          <pre>
            <code>
              let x = 5<br></br>
              (x == 4) ? "Yes!" : "No"<br></br>
              {'//returns No'}
            </code>
          </pre>
          <br></br>
        </li>
      </ul>
    </div>
  );
}

export default Slide;
