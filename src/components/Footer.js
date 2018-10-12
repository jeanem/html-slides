import React from 'react';

function Footer(props) {
  return (
    <div className='slideFooter'>
      <span aria-live="polite" aria-atomic="true">Slide {props.slideNum} of {props.totalSlides}</span>
    </div>
  );
}

export default Footer;

