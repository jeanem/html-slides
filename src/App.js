import React, { Component } from 'react';
import Prism from 'prismjs';
import './css/prism.css';
import slidesInfo from './slides/csun-2019/slidesInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import NavButton from './components/NavButton';
import PrevNext from './components/PrevNext';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
library.add(faChevronRight, faChevronLeft);

const totalSlides = slidesInfo.slides.length;
const deckTitle = slidesInfo.deck.title;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlideNum: 1,
      focusOnButton: 1,
      nextSlideNum: this.getNextSlideNum(1),
      prevSlideNum: this.getPrevSlideNum(1),
      focusOnSlide: false
    };
    this.updateState = this.updateState.bind(this);
    this.focusedSlide = React.createRef(); //set up to focus slide when nav button clicked
  }

  componentDidUpdate() {
    let { focusOnSlide } = this.state;
    if (focusOnSlide) {
      this.focusedSlide.current.focus();
      //the following will work since there is only one id on the page
      //but sticking with ref as pattern for referencing rendered nodes
      //document.getElementById('wid-Slide').focus();
    }
    //code snippet highlighter - needs to run with component update
    Prism.highlightAll();
  }

  updateState(options) {
    this.setState({
      activeSlideNum: options.activeSlideNum,
      nextSlideNum: this.getNextSlideNum(options.activeSlideNum),
      prevSlideNum: this.getPrevSlideNum(options.activeSlideNum),
      focusOnSlide: options.focusOnSlide
    });
  }
  btnArrowNav(direction, index) {
    console.warn(direction);
    console.warn(index);
  }

  getNextSlideNum(activeSlideNum) {
    if (activeSlideNum === totalSlides) {
      return 1;
    }
    return activeSlideNum + 1;
  }

  getPrevSlideNum(activeSlideNum) {
    if (activeSlideNum === 1) {
      return totalSlides;
    }
    return activeSlideNum - 1;
  }

  render() {
    let { prevSlideNum, activeSlideNum, nextSlideNum } = this.state;
    let slideTitle = slidesInfo.slides[activeSlideNum - 1].title;
    let contentFile = slidesInfo.slides[activeSlideNum - 1].contentFile;
    let BodyContent = require('./slides/csun-2019/' + contentFile).default;
    var navList = slidesInfo.slides.map((slide, index) => {
      return (
        <li key={index + 1} role="menuitem" className="w-TipContainer">
          <NavButton
            slideNum={index + 1}
            title={slide.title}
            shortTitle={slide.shortTitle}
            index={index}
            buttonText={index + 1}
            updateState={this.updateState}
            btnArrowNav={this.btnArrowNav}
            active={index + 1 === activeSlideNum ? true : false}
          />
        </li>
      );
    });
    return (
      <div>
        <main>
          <div id="wid-HeaderNavBlock">
            <h1>{deckTitle}</h1>
            <nav
              id="wid-SlideNav"
              className="w-SlideNav"
              aria-label="Slide menu"
            >
              <ul
                className="w-BtnSet"
                role="menubar"
                aria-labelledby="wid-SlideNav"
              >
                {' '}
                {navList}
              </ul>
            </nav>
          </div>
          <ul className="w-SlidesContainer">
            <li
              key={activeSlideNum}
              id={'wid-Slide-' + activeSlideNum}
              className="w-Slide"
              tabIndex="0"
              ref={this.focusedSlide}
            >
              <Header slideTitle={slideTitle} slideNum={activeSlideNum} />
              <BodyContent />
              <Footer slideNum={activeSlideNum} totalSlides={totalSlides} />
            </li>
          </ul>
          <PrevNext
            prevSlideNum={prevSlideNum}
            nextSlideNum={nextSlideNum}
            updateState={this.updateState}
          />
        </main>
      </div>
    );
  }
}

export default App;
