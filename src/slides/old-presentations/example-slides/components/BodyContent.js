import React from 'react';
function BodyContent(props) {
  const { slideDetails } = props;
  let Content = require('../' + slideDetails.contentFile).default;
  return (
    <div className="w-SlideBody">
      <Content />
    </div>
  );
}

export default BodyContent;
