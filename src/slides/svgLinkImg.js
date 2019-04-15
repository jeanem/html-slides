import React from 'react';
import W_Purple from '../images/W_Purple.svg';
const centerW = {
  width: '100px',
  margin: '0 auto'
};
function Slide(props) {
  return (
    <div className="w-SlideBody">
      <blockquote cite="https://www.dropbox.com/s/3u7rb544l7ir28l/CSUN19-SVG-SR-Test.pptx?dl=0#">
        For links and buttons, all combinations except Narrator support an IMG
        with an alt attribute as content (no role required).
      </blockquote>
      <div style={centerW}>
        <a href="https://uw.edu">
          <img src={W_Purple} alt="Go to UW web site" />
        </a>
      </div>
      <pre>
        <code className="language-markup">
          {`
<a href="https://uw.edu">
    <img src="/images/W_Purple.svg" alt="Go to UW web site" />
</a>
      `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
