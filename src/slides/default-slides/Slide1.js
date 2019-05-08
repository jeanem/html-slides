import React from 'react';

function Slide(props) {
  return (
    <div className="w-SlideBody">
      <p>Check that your Node version is Node 8 (LTS) or later</p>
      <ol>
        <li>git clone https://github.com/jeanem/html-slides.git</li>
        <li>npm install</li>
      </ol>
    </div>
  );
}

export default Slide;
