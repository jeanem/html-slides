import React, { Component } from 'react';
import Prism from 'prismjs';
import './css/prism.css';
import SlidesInfo from './slides/wcag-2.1/components/SlidesInfo';
import Header from './components/Header';
import BodyContent from './slides/wcag-2.1/components/BodyContent';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

const deckTitle = SlidesInfo.deck.title;

class AppAll extends Component {
  componentDidUpdate() {
    //code snippet highlighter - needs to run with component update
    Prism.highlightAll();
  }

  render() {
    var slideList = SlidesInfo.slides.map((slide, index) => {
      const slideDetails = SlidesInfo.slides[index];
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
      <div>
        <main>
          <div id="wid-HeaderNavBlock">
            <h1>{deckTitle}</h1>
            {slideList}
          </div>
        </main>
      </div>
    );
  }
}

export default AppAll;
