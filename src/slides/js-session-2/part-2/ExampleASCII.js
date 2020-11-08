import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>This page has a couple of ASCII illustration examples.</p>
      <figure role="img" aria-labelledby="program-flow">
        <figcaption id="program-flow">Program flow</figcaption>
        <pre>
          {`  [statement] [statement] [statement]
+-------------------------------------->`}
        </pre>
      </figure>
      <p>and</p>
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
