import React, { Component } from 'react';
import SlidesInfo from './slides/wcag-2.1/components/SlidesInfo';
import SlideView from './components/SlideView';
import PrintView from './components/PrintView';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewSlides: true
    };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    var viewType;
    this.setState(prevState => ({
      viewSlides: !prevState.viewSlides
    }));
    if (this.state.viewSlides) {
      viewType = <SlideView slides={SlidesInfo.slides} />;
    } else {
      viewType = <PrintView slides={SlidesInfo.slides} />;
    }
    return viewType;
  }

  render() {
    const deckTitle = SlidesInfo.deck.title;
    var toggleIcon;
    var toggleText;
    if (!this.state.viewButton) {
      toggleIcon = 'fa-print';
      toggleText = 'Print view';
    } else {
      toggleIcon = 'fa-slideshare';
      toggleText = 'Slide view';
    }
    return (
      <div>
        <div id="wid-HeaderNavBlock" role="banner">
          <div className="w-BannerAndTools">
            <h1>{deckTitle}</h1>
            <button
              type="button"
              className="w-ToolLink"
              onClick={this.toggleView}
            >
              <i className={'fa ' + toggleIcon} aria-hidden="true" />
              {toggleText}
            </button>
          </div>
        </div>
        {this.viewType}
      </div>
    );
  }
}

export default App;
