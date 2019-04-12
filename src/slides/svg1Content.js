import React, { Component } from 'react';
import Prism from 'prismjs';
import '../css/prism.css';

class Slide extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    const centerDot = {
      width: '100px',
      margin: '0 auto'
    };
    return (
      <div className="slideBody">
        <div style={centerDot}>
          <svg
            role="img"
            aria-labelledby="svg-title"
            aria-describedby="svg-desc"
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
              stroke-width="3"
              fill="#4b2e83"
            />
          </svg>
        </div>
        <pre>
          <code className="language-markup">
            {`
    <svg role="img" aria-labelledby="svg-title" aria-describedby="svg-desc">
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
}

export default Slide;
