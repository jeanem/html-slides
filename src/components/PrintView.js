import React, { Component } from 'react';
import BodyContent from '../slides/js-session-3/components/BodyContent';
import Header from './Header';

class PrintView extends Component {
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
      <div className="w-PrintView">
        <main>{slideList}</main>
      </div>
    );
  }
}

export default PrintView;
