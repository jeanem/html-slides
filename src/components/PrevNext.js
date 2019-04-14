import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Button extends Component {
  buttonPressed(newSlideNum) {
    const { updateState } = this.props;
    updateState({ activeSlideNum: newSlideNum });
  }

  render() {
    const { prevSlideNum, nextSlideNum } = this.props;
    return (
      <ul className="w-BtnSet">
        <li>
          <button
            className="w-BtnBase w-BtnPrev"
            onClick={this.buttonPressed.bind(this, prevSlideNum)}
          >
            <FontAwesomeIcon
              title="Previous slide"
              icon="chevron-left"
              size="2x"
            />
          </button>
        </li>
        <li>
          <button
            className="w-BtnBase w-BtnNext"
            onClick={this.buttonPressed.bind(this, nextSlideNum)}
          >
            <FontAwesomeIcon
              title="Next slide"
              icon="chevron-right"
              size="2x"
            />
          </button>
        </li>
      </ul>
    );
  }
}

export default Button;
