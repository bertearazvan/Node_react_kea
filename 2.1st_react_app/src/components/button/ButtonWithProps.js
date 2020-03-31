import React from "react";
import css from "./button.css";

export default class ButtonWithProps extends React.Component {
  render() {
    return (
      <button
        className='button-with-props'
        style={this.props.customStyle}
        onClick={() => {
          this.props.onButtonClicked("text");
        }}>
        {this.props.buttonText}
      </button>
    );
  }
}

ButtonWithProps.defaultProps = {
  buttonText: "Hello"
};
