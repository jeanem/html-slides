import React from 'react';

function Header(props) {
  return (
    <div className='slideHeader'>
      <h2 id={"wid-SlideTitle_" + props.slideNum }>{props.slideTitle}</h2>
    </div>
  );
}

export default Header;

