import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        With Marijn Haverbeke's book,{' '}
        <a href="https://eloquentjavascript.net/">Eloquent Javascript</a>, as a
        guide we will explore:
      </p>
      <h3>Part 1: atomic elements</h3>
      <ul>
        <li>Bits and values</li>
        <li>Value (data) types</li>
        <li>Operators</li>
        <li>Break into groups for exercises</li>
      </ul>
      <h3>Part 2: program stucture</h3>
      <ul>
        <li>Statements and expressions</li>
        <li>Flow control</li>
        <li>State</li>
        <li>Bindings</li>
        <li>Introduction to functions</li>
        <li>Break into groups for exercises</li>
      </ul>
    </div>
  );
}

export default Slide;
