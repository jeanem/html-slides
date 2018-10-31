import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  buttonClicked() {
    const { slideNum, updateState } = this.props;
    updateState({ activeSlideNum: slideNum, focus: true });
  }

  showTip() {
    this.setState({
      hidden: false
    });
  }

  hideTip() {
    this.setState({
      hidden: true
    });
  }

  // checkEscape(e) {
  //   //escape out of tool tip
  //   if (e.key === 'Escape') {
  //     e.preventDefault();
  //     this.setState({
  //       hidden: true
  //     });
  //     return false;
  //   }
  // }

  checkKey(e) {
    // provide keyboard arrow support for slide change
    const { slideNum } = this.props;
    const thisBtn = e.target;
    const nextBtn = document.getElementById('wid_' + slideNum + 1);
    const prevBtn = document.getElementById('wid_' + slideNum - 1);
    const firstBtn = document.getElementById('wid_1');
    const lastBtn = document.getElementById('wid_2'); // TODO: make length - 1

    console.warn(thisBtn);
    console.warn(firstBtn);

    //tool tip escape
    if (e.key === 'Escape') {
      e.preventDefault();
      this.setState({
        hidden: true
      });
      return false;
    }

    if (e.key === 'ArrowRight') {
      console.warn('right');
      thisBtn.tabIndex = -1;
      if (nextBtn !== null) {
        nextBtn.focus();
        nextBtn.tabIndex = 0;
      } else {
        firstBtn.focus();
        firstBtn.tabIndex = 0;
      }
    }

    if (e.key === 'ArrowLeft') {
      console.warn('left');
      thisBtn.tabIndex = -1;
      if (prevBtn !== null) {
        prevBtn.focus();
        prevBtn.tabIndex = 0;
      } else {
        lastBtn.focus();
        lastBtn.tabIndex = 0;
      }
    }
  }

  render() {
    const { slideNum, shortTitle, buttonText, active, index } = this.props;
    const { hidden } = this.state;
    const tipID = 'wid_ToolTip-' + slideNum;
    const tipStyle = { display: hidden ? 'none' : 'block' };

    return (
      <div
        onMouseOver={this.showTip.bind(this)}
        onMouseOut={this.hideTip.bind(this)}
        onFocus={this.showTip.bind(this)}
        onBlur={this.hideTip.bind(this)}
        onKeyDown={this.checkKey.bind(this)}
      >
        <button
          type="button"
          id={'wid_' + slideNum}
          className={
            active === true
              ? 'w-BtnBase w-ToolTipped mod-Active'
              : 'w-BtnBase w-ToolTipped'
          }
          aria-describedby={tipID}
          onClick={this.buttonClicked.bind(this)}
        >
          {buttonText}
        </button>
        <div
          id={tipID}
          role="tooltip"
          aria-hidden={hidden}
          className="w-ToolTip"
          style={tipStyle}
        >
          <span className="w-VisuallyHide">{index}</span>
          {shortTitle}
          {active === true ? (
            <span className="w-VisuallyHide">Current slide</span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Button;
