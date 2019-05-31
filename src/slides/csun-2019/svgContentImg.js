import React from 'react';
import W_Purple from './images/W_Purple.svg';
const centerW = {
  width: '100px',
  margin: '0 auto'
};
function Slide(props) {
  return (
    <div>
      <blockquote cite="https://www.dropbox.com/s/3u7rb544l7ir28l/CSUN19-SVG-SR-Test.pptx?dl=0#">
        For content, all combinations support an IMG with an alt attribute and
        role='img' (to support older VO).
      </blockquote>
      <div style={centerW}>
        <img src={W_Purple} alt="The UW W" role="img" />
      </div>
      <pre>
        <code>
          {`
<img src="images/W_Purple.svg" 
alt="The UW W" 
role="img"
/>
      `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
