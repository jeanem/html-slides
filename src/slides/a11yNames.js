import React from 'react';

function Slide(props) {
  return (
    <div className="w-SlideBody">
      <h3>ARIA-labelledby, ARIA-label, ARIA-describedby on Static Elements</h3>
      <p>How screen readers handle various label/element combinations</p>
      <ul>
        <li>
          David MacDonald -{' '}
          <a target="_blank" href="http://davidmacd.com/">
            CanAdapt
          </a>
        </li>
        <li>
          Editor of{' '}
          <a target="_blank" href="https://www.w3.org/TR/using-aria/">
            W3C Using ARIA working draft
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.w3.org/TR/using-aria/#practical-support-aria-label-aria-labelledby-and-aria-describedby"
          >
            Summary of findings
          </a>{' '}
          for static and interactive elements
        </li>
      </ul>
      <blockquote>
        Be like a french chef, use ARIA to bring out the natural flavor of HTML{' '}
        <em class="w-Note">(paraphrased)</em>
      </blockquote>
    </div>
  );
}

export default Slide;
