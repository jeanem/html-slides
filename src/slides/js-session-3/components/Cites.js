import React from 'react';

function Cites(props) {
  const { title, detailLink } = props;

  return (
    <div className="w-SlideReferences mod-Minimal">
      <h3>Further reading</h3>
      <a href={detailLink}>{title}</a>
    </div>
  );
}

export default Cites;
