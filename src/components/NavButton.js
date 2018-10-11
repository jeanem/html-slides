import React, { Component } from 'react';
//import ToolTip from './ToolTip';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }; 
  }

  buttonClicked() {
    const { slideNum, title, shortTitle, buttonText, updateState } = this.props;
    updateState({activeSlideNum: slideNum});
  }
  
  showTip() {
    this.setState ({
      hidden:false
    });
  }

  hideTip() {
    this.setState ({
      hidden:true
    }); 
  }

  checkEscape(e) {//escape out of tool tip
    if (e.key === 'Escape') {
      e.preventDefault();
      this.setState ({
        hidden: true
      });
      return false;
    }
  }

  render() {
    const { slideNum, shortTitle, buttonText, active, index } = this.props;
    const { hidden } = this.state;
    const tipID = "wid_ToolTip-" + slideNum;
    const tipStyle = { display: hidden ? 'none' : 'block' }

    return (
      <div
        onMouseOver={this.showTip.bind(this)}
        onMouseOut={this.hideTip.bind(this)}
        onFocus={this.showTip.bind(this)}
        onBlur={this.hideTip.bind(this)}
        onKeyDown={this.checkEscape.bind(this)}
      >
        <button 
          type="button" 
          id={"wid_" + slideNum} 
          className={ 
            active === true ? "w-BtnBase w-ToolTipped mod-Active" : "w-BtnBase w-ToolTipped"
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
          {active === true ? <span className="w-VisuallyHide">Current slide</span> : null}
        </div>
      </div>
    );
  }
}

export default Button;
