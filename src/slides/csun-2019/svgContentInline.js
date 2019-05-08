import React from 'react';
const centerDot = {
  width: '100px',
  margin: '0 auto'
};
function Slide(props) {
  return (
    <div className="w-SlideBody">
      <blockquote cite="https://www.dropbox.com/s/3u7rb544l7ir28l/CSUN19-SVG-SR-Test.pptx?dl=0#">
        For content, support for inline SVG is much better [then it use to be].
      </blockquote>
      <div style={centerDot}>
        <svg
          role="img"
          aria-labelledby="svg-title"
          aria-describedby="svg-desc"
          viewBox="0 0 100 100"
        >
           <title id="svg-title">A purple dot</title>
          <desc id="svg-desc">
            A purple dot rendered in the middle of the page
          </desc>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#4b2e83"
            strokeWidth="3"
            fill="#4b2e83"
          />
        </svg>
      </div>
      <pre>
        <code className="language-markup">
          {`
<svg role="img" aria-labelledby="svg-title" 
  aria-describedby="svg-desc" ... >
 <title id="svg-title">A purple dot</title>
<desc id="svg-desc">
  A purple dot rendered in the middle of the page
</desc>
<circle ...
      `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
