import React, { Component } from 'react';
import Slides from './slides/SlideIndex';
import Button from './components/Button';
import PrevNext from './components/PrevNext';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronRight, faChevronLeft)

class App extends Component {
    constructor() {
      super();
      this.state = {
        currentSlide: 'Slide1',
        currentTitle: 'Slide 1 example',
        currentShortTitle: 'Slide 1',
        currentNumber: null,
        currentLevel: null,
        currentDetailLink: null,
        index: 0,
        slideFocus: false
      };
      this.updateState = this.updateState.bind(this);
      this.focusedSlide = React.createRef(); //set up to focus slide when nav button clicked
    }
    updateState( currentSlide, currentTitle, currentShortTitle, currentNumber, currentLevel, currentDetailLink, index, slideFocus) {

      this.setState ({
          currentSlide: currentSlide,
          currentTitle: currentTitle,
          currentShortTitle: currentShortTitle,
          currentNumber: currentNumber,
          currentLevel: currentLevel,
          currentDetailLink: currentDetailLink,
          index: index,
          slideFocus: slideFocus
      });
      if(slideFocus === true) {//note errored on ternary expression in this context so doing traditional
        this.focusedSlide.current.focus();
      } else {
        return null;
      }
    }

    render () {
      const { currentSlide, currentTitle, currentNumber, currentLevel, currentDetailLink, index } = this.state;
      const slidesInfo = [
        {'slide': 'Slide1', 'title':'Setup', 'shortTitle':'Setup', 'number':null, 'level':null, 'detailLink':null },
        {'slide': 'Slide2', 'title':'Deploy locally and to Github page', 'shortTitle':'Deploy', 'number':null, 'level':null, 'detailLink':null },
      ];
    
      let prevIndex;
      let nextIndex;
      const totalSlides = slidesInfo.length;

      index === 0
      ?
      prevIndex = totalSlides - 1
      :
      prevIndex = index - 1


      index === totalSlides - 1
      ?
      nextIndex = 0
      :
      nextIndex = index + 1

      var WCAGLink =  <a href={"https://www.w3.org/WAI/WCAG21/Understanding/" + currentDetailLink }>{ currentTitle } {currentNumber} ({currentLevel}) details and exceptions</a>;
      var shortWCAGLink = "https://www.w3.org/WAI/WCAG21/Understanding/" + currentDetailLink;
      var SlideToRender = Slides[currentSlide] = require('./slides/' + currentSlide).default;
      var navList = slidesInfo.map( (slideInfo, index) => {
      return (
        <li key={ slideInfo.slide } className="w-TipContainer">
          <Button 
            slide={ slideInfo.slide }
            title= { slideInfo.title }
            shortTitle = { slideInfo.shortTitle }
            number= { slideInfo.number }
            level= { slideInfo.level }
            detailLink= { slideInfo.detailLink }
            index = { index }
            buttonText= { index + 1 } 
            updateState={this.updateState} 
            active = {
              slideInfo.slide === currentSlide
              ?
              true
              :
              false
            }
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
                { navList }
              </ul>
            </nav>
          </div>
        <PrevNext 
          prevSlide = { slidesInfo[prevIndex] }
          nextSlide = { slidesInfo[nextIndex] }
          prevIndex = { prevIndex }
          nextIndex= { nextIndex }
          updateState={ this.updateState }
        />
          <ul className="w-SlidesContainer">
            <li 
               key={ currentSlide }
               tabIndex='-1'
               ref={ this.focusedSlide }
               >
              <h2 id={"wid-SlideTitle_" +  currentSlide }>{ currentTitle }</h2>
                <SlideToRender  shortWCAGLink = { shortWCAGLink } />
                
              <p>
                  { 
                  currentNumber != null
                  ?
                  WCAGLink
                  :
                  null 
                  }
              </p>
                <span aria-live="polite" aria-atomic="true">Slide { index + 1 } of { totalSlides }</span>
            </li>
          </ul>

        </main>
      </div>
      )
    }
}

export default App;