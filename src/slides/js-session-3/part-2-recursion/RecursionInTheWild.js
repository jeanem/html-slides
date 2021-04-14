import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Here's an example of deep copying an object. You might want to do this
        because...
      </p>
      <p>
        This example uses a depth first search to deep clone an object. A
        production ready equivilant is the{' '}
        <a href="https://github.com/lodash/lodash/blob/master/.internal/baseClone.js">
          Lodash Deep Copy Function.
        </a>
        .
      </p>
      <pre>
        <code>
          {`
function dfs(data) {
  if (typeof data === 'object') {
    const result = {};
    
    for (let key in data) {
      result[key] = dfs(data[key]);
    }
    
    return result;
  }
  
  return data;
}

const data = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    g: {
      e: 4,
      r: {
        y: 5,
      },
    },
  },
};

const newData = dfs(data);

data.c.g.e = 5000;
data.c.g.d = 90000;

console.log("Original data", data);
console.log("Copied data", newData);
         `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
