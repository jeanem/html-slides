import React from 'react';

function Slide(props) {
  return (
    <div>
      <h3>FizzBuzz</h3>
      <p>Write a program that</p>
      <ul>
        <li>
          uses console.log to print all the numbers from 1 to 100, with two
          exceptions
        </li>
        <li>for numbers divisible by 3, print "Fizz" instead of the number</li>
        <li>for numbers divisible by 5 (and not 3), print "Buzz" instead</li>
      </ul>

      <p>If time</p>
      <ul>
        <li>
          modify the program to print "FizzBuzz" for numbers that are divisible
          by both 3 and 5
        </li>
        <li>
          and still print "Fizz" or "Buzz" for numbers divisible by only one of
          those
        </li>
      </ul>
    </div>
  );
}

export default Slide;
