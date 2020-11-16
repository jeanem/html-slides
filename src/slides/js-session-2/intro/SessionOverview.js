import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        With Marijn Haverbeke's book,{''}{' '}
        <a href="https://eloquentjavascript.net/"> Eloquent Javascript </a>, as
        a guide we will explore:
      </p>
      <h3>Session outline</h3>
      <ul>
        <li>Review of the last JavaScript session </li>
        <li>Part 1: Introduction to functions</li>
        <li>Breakout groups: Exercise 1 </li>
        <li>Part 2: Arrow functions and other concepts</li>
        <li>Breakout groups: Exercise 3 </li>
        <li>Part 3: Closure, recursion and other concepts </li>
        <li>Breakout groups: Exercise 2</li>
      </ul>
    </div>
  );
}

export default Slide;
