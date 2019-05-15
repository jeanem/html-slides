import React from 'react';
const infoStatus = {
  backgroundColor: 'lightBlue',
  padding: '1em',
  border: 'solid 2px #127796',
  borderRadius: '.5rem',
  display: 'inline-block',
  margin: '0 0 1em'
};
function Slide(props) {
  return (
    <div>
      <h3>An example</h3>
      <p style={infoStatus} aria-atomic="true" aria-live="polite">
        Showing 9 of 35 results
      </p>
      <pre>
        <code className="language-markup">{`<p aria-atomic="true" aria-live="polite">
        Showing 9 of 35 results
      </p>`}</code>
      </pre>
    </div>
  );
}

export default Slide;
