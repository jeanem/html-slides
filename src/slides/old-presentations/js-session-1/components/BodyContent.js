import React from 'react';
import Cites from './Cites';

function BodyContent(props) {
  const { slideDetails } = props;
  let Content = require('../' + slideDetails.contentFile).default;
  return (
    <div className="w-SlideBody">
      <Content />
      {slideDetails.detailLink === null ? (
        ''
      ) : (
        <Cites
          title={slideDetails.linkTitle}
          detailLink={slideDetails.baseURL + slideDetails.detailLink}
        />
      )}
    </div>
  );
}

export default BodyContent;
