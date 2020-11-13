import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        A closure is a feature which references{' '}
        <q cite="http://phetsims.github.io/scenery/">
          a specific instance of a local binding in an enclosing scope
        </q>
      </p>
      <p>Book example</p>

      <pre>
        <code>
          {`
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
`}
        </code>
      </pre>

      <p>Same thing expanded with descriptive names</p>

      <pre>
        <code>{`function multiplier(factor1) {
    function calculateProduct(factor2) {
      return factor1 * factor2;
    }
    return calculateProduct;
  }
  let multiplyBy4 = multiplier(4);
  multiplyBy4(5);
  `}</code>
      </pre>

      <ul>
        <li>specific instance</li>
        <li>local binding</li>
        <li>in an enclosing scope</li>
      </ul>
      <pre>
        <code>
          {`
function multiplier(factor1) {
  console.log(
    'the first factor, ' +
      factor1 +
      ', is defined when the multiplyBy' +
      factor1 +
      ' is created'
  );
  function calculateProduct(factor2) {
    console.log(
      'the second factor,' +
        factor2 +
        ', is passed in at the running of the instance '
    );
    console.warn(
      'When the instance is run, it returns the value of the inner function, calculateProduct: outer factor1 * inner factor2 = ',
      factor1 * factor2
    );
    return factor1 * factor2;
  }
  return calculateProduct;
}
console.warn('let multiplyBy4 = multiplier(4);');
let multiplyBy4 = multiplier(4);

console.warn('multiplyBy4(5); //the specific instance');
multiplyBy4(5);
      `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
