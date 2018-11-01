import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      focusOnButton: 1
    };
    this.focusedButton = React.createRef(); //set up to focus slide when nav button clicked
  }

  componentDidUpdate() {
    const { index } = this.props;
    const { focusOnButton } = this.state;
    console.warn(focusOnButton);
    if (focusOnButton === index + 1) {
      //this.focusedButton.current.focus();
    }
    console.warn(index);
  }

  buttonClicked() {
    const { slideNum, updateState } = this.props;
    updateState({ activeSlideNum: slideNum, focusOnSlide: true });
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
    const { slideNum, updateState, index } = this.props;

    //tool tip escape
    if (e.key === 'Escape') {
      e.preventDefault();
      this.setState({
        hidden: true
      });
      return false;
    }

    //TODO add behaviour option to activeSlide number to focusOnSlide only and not return the slide yet
    // then add first and last behaviour
    if (e.key === 'ArrowRight') {
      console.warn('how about me do I fire?');
      this.setState({
        focusOnButton: index + 1
      });
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
          ref={this.focusedButton}
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
