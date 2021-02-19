import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>
          {' '}
          Function best practices
          <ul>
            <li>Side effects and return values</li>
            <li>Growing functions</li>
            <li>Naming functions</li>
          </ul>
        </li>

        <li>Further reading on advanced function concepts</li>
      </ul>
    </div>
  );
}

export default Slide;
