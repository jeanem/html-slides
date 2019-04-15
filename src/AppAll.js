import React, { Component } from 'react';
import Prism from 'prismjs';
import './css/prism.css';
import slidesInfo from './slides/slidesInfo';
import Header from './components/Header';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

const deckTitle = slidesInfo.deck.title;

class AppAll extends Component {
  componentDidUpdate() {
    //code snippet highlighter - needs to run with component update
    Prism.highlightAll();
  }

  render() {
    var slideList = slidesInfo.slides.map((slide, index) => {
      let contentFile = slidesInfo.slides[index].contentFile;
      let BodyContent = require('./slides/' + contentFile).default;
      return (
        <ul className="w-SlidesContainer">
          <li key={index} id={'wid-Slide-' + index} className="w-Slide">
            <Header slideTitle={slide.title} slideNum={index} />
            <BodyContent />
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
