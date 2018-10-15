import React, { Component } from 'react';
import EventListener, {withOptions} from 'react-event-listener';
import slidesInfo from './slides/slidesInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import NavButton from './components/NavButton';
import PrevNext from './components/PrevNext';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronRight, faChevronLeft)

const totalSlides = slidesInfo.slides.length;
const deckTitle = slidesInfo.deck.title;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlideNum: 1,
      nextSlideNum: this.getNextSlideNum(1),
      prevSlideNum: this.getPrevSlideNum(1),
      focus: false,
    };
    this.updateState = this.updateState.bind(this);
    this.focusedSlide = React.createRef(); //set up to focus slide when nav button clicked
  }

  updateState(options) {
    this.setState ({
      activeSlideNum: options.activeSlideNum,
      nextSlideNum: this.getNextSlideNum(options.activeSlideNum),
      prevSlideNum: this.getPrevSlideNum(options.activeSlideNum),
      focus: options.focus
    });
    if(options.focus) {//note errored on ternary expression in this context so doing traditional
      this.focusedSlide.current.focus();
    } else {
      return null;
    }
  }

  checkKey(e) {
    // provide keyboard arrow support for slide change
    if (e.key === 'ArrowLeft') {
      this.updateState({
        activeSlideNum: this.state.prevSlideNum
      })
    }
    if (e.key === 'ArrowRight') {
      this.updateState({
        activeSlideNum: this.state.nextSlideNum
      })
    }
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

  render () {
    let { prevSlideNum, activeSlideNum, nextSlideNum } = this.state;
    let slideTitle = slidesInfo.slides[activeSlideNum - 1].title;
    let contentFile = slidesInfo.slides[activeSlideNum - 1].contentFile; 
    let BodyContent = require('./slides/' + contentFile).default;
  
    var navList = slidesInfo.slides.map((slide, index) => {
      return (
        <li key={slide.slideNum.toString()} className="w-TipContainer">
          <EventListener
            target="window"
            onKeyDown={this.checkKey.bind(this)}
          />
          <NavButton 
            slideNum={slide.slideNum}
            title={slide.title}
            shortTitle={slide.shortTitle}
            index={index}
            buttonText={slide.slideNum} 
            updateState={this.updateState} 
            active={slide.slideNum === activeSlideNum ? true : false}
          />
        </li>
      );
    });

    return (
      <div>
        <main>
          <div id="wid-HeaderNavBlock">
            <h1>{deckTitle}</h1> 
            <nav className="w-SlideNav" aria-label="Slide menu">
              <ul className="w-BtnSet">         
                {navList}
              </ul>
            </nav>
          </div>
          <PrevNext 
            prevSlideNum={prevSlideNum}
            nextSlideNum={nextSlideNum}
            updateState={this.updateState}
          />
          <ul className="w-SlidesContainer">
            <li 
              key={activeSlideNum} 
              tabIndex='-1'
              ref={this.focusedSlide}
            >
              <Header 
                slideTitle={slideTitle} 
                slideNum={activeSlideNum}
              />
              <BodyContent />
              <Footer 
                slideNum={activeSlideNum}
                totalSlides={totalSlides}
              />
            </li>
          </ul>
        </main>
      </div>
    )
  }
}

export default App;
