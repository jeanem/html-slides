import React, { Component } from 'react';
import slidesInfo from './slides/slidesInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import NavButton from './components/NavButton';
import PrevNext from './components/PrevNext';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronRight, faChevronLeft)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlideNum: 1,
      focus: false,
    };
    this.updateState = this.updateState.bind(this);
    this.focusedSlide = React.createRef(); //set up to focus slide when nav button clicked
  }

  updateState(options) {
    this.setState ({
      activeSlideNum: options.activeSlideNum,
      focus: options.focus
    });
    if(options.focus) {//note errored on ternary expression in this context so doing traditional
      this.focusedSlide.current.focus();
    } else {
      return null;
    }
  }

  render () {
    let { activeSlideNum } = this.state;
    const totalSlides = slidesInfo.length;
    const activeTitle = slidesInfo[activeSlideNum - 1].title;

    let nextSlideNum = activeSlideNum + 1;
    let prevSlideNum = activeSlideNum - 1;
    // for next/prev buttons, handle first/last slide cases
    if (activeSlideNum === totalSlides) {
      nextSlideNum = 1;
    } else if (activeSlideNum === 1) {
      prevSlideNum = totalSlides;
    } 

    let contentFile = slidesInfo[activeSlideNum - 1].contentFile; 
    let BodyContent = require('./slides/' + contentFile).default;
  
    var navList = slidesInfo.map((slideInfo, index) => {
      return (
        <li key={slideInfo.slideNum.toString()} className="w-TipContainer">
          <NavButton 
            slideNum={slideInfo.slideNum}
            title={slideInfo.title}
            shortTitle={slideInfo.shortTitle}
            index={index}
            buttonText={slideInfo.slideNum} 
            updateState={this.updateState} 
            active={slideInfo.slideNum === activeSlideNum ? true : false}
          />
        </li>
      );
    });

    return (
      <div>
        <main>
          <div id="wid-HeaderNavBlock">
            <h1>HTML slideshow created with React JS</h1> 
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
                slideTitle={activeTitle} 
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
