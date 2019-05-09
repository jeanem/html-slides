import React from 'react';

const centerW = {
  width: '100px',
  margin: '0 auto'
};
function Slide(props) {
  return (
    <div>
      <blockquote cite="https://www.dropbox.com/s/3u7rb544l7ir28l/CSUN19-SVG-SR-Test.pptx?dl=0#">
        For links and buttons, all combinations except Narrator support
        aria-label when SVG used as content.
      </blockquote>
      <div style={centerW}>
        <a href="https://uw.edu" aria-label="Go to UW's website">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 72.62">
            <title>Asset 1</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="bothell_stacked_large" data-name="bothell stacked large">
                <path
                  className="cls-1"
                  d="M79.26,0V13.1h9.2L78.19,51.35S65.61.71,65.43,0H52.13L38.33,51.35,28.87,13.1h9.58V0H0V13.1H8.52L23.4,72.62H44c.18-.7,9.85-37.45,9.85-37.45l9.37,37.45H83.89c.19-.7,15.66-59.52,15.66-59.52H108V0Z"
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
      <pre>
        <code className="language-markup">
          {`
<a href="https://uw.edu" aria-label="Go to UW's website">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 72.62">
    <title>Asset 1</title>
    <g id="Layer_2" data-name="Layer 2">
    <g id="bothell_stacked_large" data-name="bothell stacked large">
        <path ...
      `}
        </code>
      </pre>
    </div>
  );
}

export default Slide;
