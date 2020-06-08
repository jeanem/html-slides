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
      </ul>
      <p>Break into groups for exercises</p>
      <h3>Part 2: program stucture</h3>
      <ul>
        <li>Expressions and statements</li>
        <li>Flow control</li>
        <li>State annd Bindings</li>
        <li>Introduction to functions</li>
      </ul>
      <p>Break into groups for exercises</p>
    </div>
  );
}

export default Slide;
