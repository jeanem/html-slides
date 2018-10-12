import React from 'react';

function Footer(props) {
  return (
    <span aria-live="polite" aria-atomic="true">Slide {props.slideNum} of {props.totalSlides}</span>
  );
}

export default Footer;

