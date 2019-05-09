import React from 'react';
const baseLink = 'https://www.w3.org/WAI/WCAG21/Understanding/';
function WCAGCites(props) {
  const { title, number, level, detailLink } = props;
  return (
    <p>
      <a href={baseLink + detailLink}>
        {title} ({number}-{level}) details and exceptions
      </a>
    </p>
  );
}
function WCAGQuote(props) {
  const { detailLink, quote } = props;
  return <blockquote cite={baseLink + detailLink}>{quote}</blockquote>;
}

//export default { WCAGCites, WCAGLink };
export { WCAGCites, WCAGQuote };

//next add this into individual slides:  <WCAGLink detailLink={slideDetails.detailLink} />
