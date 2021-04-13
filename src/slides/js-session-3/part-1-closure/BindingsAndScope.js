import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Two types of scope: GLOBAL and LOCAL</p>
      <h3>Global</h3>
      <div>
        Variables defined outside of a function or block are scoped globally and
        available to the whole program
      </div>
      <h3>Local</h3>
      <p>
        Variable created inside a block or function are scoped to that block.
      </p>
      <h3>Keyword Behavior</h3>
      <ul>
        <li>
          <code>let</code> - scoped to block
        </li>
        <li>
          <code>const</code> - scoped to block
        </li>
        <li>
          <code>var</code> - older style binding, scoped globally or locally
        </li>
      </ul>

      <table width="100%" cellpadding="5" style={{ background: 'white' }}>
        <tr style={{ background: '#4b2e83', color: 'white' }}>
          <th>Keyword</th>
          <th>Scope</th>
          <th>Can Be Reassigned</th>
          <th>Can Be Redeclared</th>
        </tr>
        <tr>
          <td>
            <strong>var</strong>
          </td>
          <td>Function scope</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>
            <strong>let</strong>
          </td>
          <td>Block scope</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>
            <strong>const</strong>
          </td>
          <td>Block scope</td>
          <td>No</td>
          <td>No</td>
        </tr>
      </table>
      <br></br>
      <pre>
        <code>
          {`let person = "Baby 👶";
let person = "Adult 🧑‍🦱";
console.log(person)'
//result: Uncaught SyntaxError: Identifier 'person' has already been declared
        `}
        </code>
      </pre>
      <pre>
        <code>
          {`let person = "Baby 👶";
person = "Adult 🧑‍🦱";
console.log(person);
//result:Adult 🧑‍🦱
        `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
