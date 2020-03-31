import React from "react";

export default class ButtonWithChildren extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <button className='button-with-children'>{children || "Click"}</button>
    );
  }
}
