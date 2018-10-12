import React from 'react';

function Header(props) {
  return (
    <h2 id={"wid-SlideTitle_" + props.slideNum }>{props.slideTitle}</h2>
  );
}

export default Header;

