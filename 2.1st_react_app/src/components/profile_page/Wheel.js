import React from "react";

class Wheel extends React.Component {
  render() {
    const { wheel } = this.props;

    return (
      <div style={{ display: "inline-block" }}>
        <div
          style={{
            backgroundColor: wheel.color,
            width: "50px",
            height: "50px",
            margin: "5px"
          }}
        />

        <p>{wheel.name}</p>
      </div>
    );
  }
}

export default Wheel;
