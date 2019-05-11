import React from 'react';
const baseLink = 'https://www.w3.org/WAI/WCAG21/Understanding/';
function WCAGCites(props) {
  const { title, number, level, detailLink, knowabilityLink } = props;
  return (
    <div className="w-SlideReferences">
      <h3>References</h3>
      <ul>
        <li>
          <a href={baseLink + detailLink}>
            {title} ({number}-{level}) details and exceptions
          </a>
        </li>
        <li>
          <a href={knowabilityLink}>
            Knowability article on {title} ({number}-{level})
          </a>
        </li>
      </ul>
    </div>
  );
}
function WCAGQuote(props) {
  const { detailLink, quote } = props;
  return <blockquote cite={baseLink + detailLink}>{quote}</blockquote>;
}

//export default { WCAGCites, WCAGLink };
export { WCAGCites, WCAGQuote };

//next add this into individual slides:  <WCAGLink detailLink={slideDetails.detailLink} />
