import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        Multiple statements are executed one after another from beginning to end
        (top-to-bottom in the code)
      </p>
      <figure role="img" aria-labelledby="program-flow">
        <figcaption id="program-flow">Program flow</figcaption>
        <pre>
          {`  [statement] [statement] [statement]
+-------------------------------------->`}
        </pre>
      </figure>
      <p>But you can create changes in the flow control by using</p>
      <ul>
        <li>conditional statements (if, else, and switch) or</li>
        <li>looping statements (while, do, for)</li>
      </ul>
      <figure role="img" aria-labelledby="program-flow-changed">
        <figcaption id="program-flow-changed">
          Program flow changed with if/else condition
        </figcaption>
        <pre>
          {`           
               [statement]
              /-----------\\                                
 [statement]       <if>        [statement]  [statement]
+---------------?           >----------------------------->
                 <else>
              \\-----------/
               [statement]
`}
        </pre>
      </figure>
    </div>
  );
}

export default Slide;
