import React from 'react';

function Slide(props) {
  return (
    <div className="w-SlideBody">
      <ul>
        <li>to run locally: npm run start</li>
        <li>to deploy to github page, on the master branch: npm run deploy</li>
      </ul>
    </div>
  );
}

export default Slide;
