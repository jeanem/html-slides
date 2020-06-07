import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>Numberic values.</p>
      <ul>
        <li>
          JavaScript uses fixed number of bits (64) that can represent a number
        </li>
        <li>
          The 64 bit constraint includes the position of a decimal, negative
          sign symbols
        </li>
        <li>
          A 64 bit constraint is equal to 2 ** 64 = 18446744073709552000 But
          bits also have to represent the negative number sign (-) and the
          position of the decimal for fractional numbers.
          {/* START HERE */}
          This means for us that generally any whole number (integer) we use
          will be precise, anything under 9 quadrillion but fractional numbers
          do not have the same guarantee{' '}
        </li>
      </ul>
    </div>
  );
}

export default Slide;
