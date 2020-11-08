import React, { Component } from 'react';
import SlidesInfo from './slides/js-session-2/components/SlidesInfo';
import SlideView from './components/SlideView';
import PrintView from './components/PrintView';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideView: true,
    };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    this.setState((prevState) => ({
      slideView: !prevState.slideView,
    }));
  }

  render() {
    const deckTitle = SlidesInfo.deck.title;
    var toggleIcon;
    var toggleText;
    var viewType;
    if (this.state.slideView) {
      toggleIcon = 'fa-print';
      toggleText = 'Print view';
      viewType = <SlideView slides={SlidesInfo.slides} />;
    } else {
      toggleIcon = 'fa-slideshare';
      toggleText = 'Slide view';
      viewType = <PrintView slides={SlidesInfo.slides} />;
    }
    return (
      <div>
        <div id="wid-HeaderNavBlock" role="banner">
          <div className="w-BannerAndTools">
            <h1>{deckTitle}</h1>
            <button
              type="button"
              className="w-ToolBtn"
              onClick={this.toggleView}
            >
              <i className={'fa ' + toggleIcon} aria-hidden="true" />
              {toggleText}
            </button>
          </div>
        </div>
        {viewType}
      </div>
    );
  }
}

export default App;
