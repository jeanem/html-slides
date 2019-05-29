import React, { Component } from 'react';
import Prism from 'prismjs';
import '../css/prism.css';

import BodyContent from '../slides/wcag-2.1/components/BodyContent';
import Header from './Header';

class PrintView extends Component {
  componentDidUpdate() {
    //code snippet highlighter - needs to run with component update
    Prism.highlightAll();
  }

  render() {
    const { slides } = this.props;
    var slideList = slides.map((slide, index) => {
      const slideDetails = slides[index];
      return (
        <ul key={index} className="w-SlidesContainer">
          <li id={'wid-Slide-' + index} className="w-Slide">
            <Header slideTitle={slide.title} slideNum={index} />
            <BodyContent slideDetails={slideDetails} />
          </li>
        </ul>
      );
    });
    return (
      <div className="w-AppAll">
        <main>{slideList}</main>
      </div>
    );
  }
}

export default PrintView;
