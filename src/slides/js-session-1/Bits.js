import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Bits: two valued things. Discrete information reduced to a sequence of
        zeros and ones.
      </p>
      <p className="w-CodeCaption">Book example: binary version of 13</p>
      <table className="w-CodeTable">
        <tbody>
          <tr>
            <td className="mod-CellRight">0</td>
            <td className="mod-CellRight">0</td>
            <td className="mod-CellRight">0</td>
            <td className="mod-CellRight">0</td>
            <td className="mod-CellRight mod-Highlight">
              <strong>1</strong>
            </td>
            <td className="mod-CellRight mod-Highlight">
              <strong>1</strong>
            </td>
            <td className="mod-CellRight">
              <strong>0</strong>
            </td>
            <td className="mod-CellRight mod-Highlight">
              <strong>1</strong>
            </td>
          </tr>
          <tr>
            <td className="mod-CellRight">128</td>
            <td className="mod-CellRight">64</td>
            <td className="mod-CellRight">32</td>
            <td className="mod-CellRight">16</td>
            <td className="mod-CellRight mod-Highlight">
              <strong>8</strong>
            </td>
            <td className="mod-CellRight mod-Highlight">
              <strong>4</strong>
            </td>
            <td className="mod-CellRight">2</td>
            <td className="mod-CellRight mod-Highlight">
              <strong>1</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <pre>
        <code>8 + 4 + 1 = 13</code>
      </pre>
      <p>
        Or to find a value of a binary number in JavaScript, use this function
      </p>
      <pre>
        <code>parseInt("00001101", 2);</code>
      </pre>
    </div>
  );
}

export default Slide;
