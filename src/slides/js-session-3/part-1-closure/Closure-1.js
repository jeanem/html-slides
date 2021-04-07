import React from 'react';

function Slide(props) {
  return (
    <div>
      <blockquote cite="JavaScript Ninga p.90">
        A closure is the scope created when a function is declared that allows
        the function to{' '}
        <strong>
          access and manipulate variables that are external to that function.
        </strong>
      </blockquote>
      <h3>Example 1</h3>
      <pre>
        <code>
          {`function outer(n){ 
  function inner(){ 
    let innerNumber = n; 
    return innerNumber; 
  }
  return inner(); 
}`}
        </code>
      </pre>
      <ol>
        <li>
          an <code>outer(n)</code> function is declared
        </li>
        <li>
          when the <code>outer(n)</code> function is executed it
          <ul>
            <li>
              creates a closure that includes
              <ul>
                <li>
                  <code>inner()</code> function's declaration and
                </li>
                <li>
                  all variables/parameters that are in scope at that point
                </li>
              </ul>
            </li>
            <li>
              returns the <code>inner()</code> function
            </li>
          </ul>
        </li>
        <li>
          when the <code>inner()</code> function is executed it
          <ul>
            <li>
              sets the <code>innerNumber</code> variable to the value of{' '}
              <code>n</code> parameter passed in when the <code>inner()</code>{' '}
              was declared
            </li>
            <li>
              returns the
              <code>innerNumber</code> variable
            </li>
          </ul>
        </li>
      </ol>
      <hr />
      <h3>Execute the outer function</h3>
      <p>
        execute the outer function with a <code>5</code> passed in and bind it
        to the variable <code>outerFive</code> to hold it in memory
      </p>
      <pre>
        <code>
          {`let outerFive = outer(5);
`}
        </code>
      </pre>

      <p>
        The inner() function can access the value of the <code>n</code>{' '}
        parameter as it was at the time the inner() function was declared.
      </p>
      <hr />
      <h3>and at a later time ...</h3>
      <pre>
        <code>
          {`console.log(outerFive)
// 5
`}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
