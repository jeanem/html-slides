import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          {' '}
          <p className="w-CodeCaption">
            The primitive number type represents both integer and floating point
            numbers
          </p>
          <pre>
            <code>{`2, 10, 3.1, 40.5555, -10, -1.333`}</code>
          </pre>
        </li>
        <li>
          JavaScript uses fixed number of bits (64) that can represent a number
        </li>
        <li>
          <p className="w-CodeCaption">
            So the primative number type can represent about 18 quintillion
            different numbers
          </p>
        </li>
        <li>
          But the bits also have to represent the negative number sign (-) and
          the position of the decimal for fractional numbers which brings it
          down to about 9 quadrillion whole numbers that will be precise
        </li>
        <li>
          Fractional numbers do not have the same guarantee - treat them as
          approximations{' '}
        </li>
      </ul>
    </div>
  );
}

export default Slide;
