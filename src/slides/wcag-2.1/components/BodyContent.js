import React from 'react';
import { WCAGCites, WCAGQuote } from './WCAG';

function BodyContent(props) {
  const { slideDetails } = props;
  let Content = require('../' + slideDetails.contentFile).default;
  return (
    <div className="w-SlideBody">
      {slideDetails.number === null ? (
        ''
      ) : (
        <WCAGQuote
          quote={slideDetails.quote}
          detailLink={slideDetails.detailLink}
        />
      )}
      <Content />
      {slideDetails.number === null ? (
        ''
      ) : (
        <WCAGCites
          title={slideDetails.title}
          number={slideDetails.number}
          level={slideDetails.level}
          detailLink={slideDetails.detailLink}
          knowabilityLink={slideDetails.knowabilityLink}
        />
      )}
    </div>
  );
}

export default BodyContent;
