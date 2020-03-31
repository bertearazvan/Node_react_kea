import React from "react";
import Wheel from "./Wheel";

class Bus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { passangers: [], passanger: { name: "" } };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ passanger: { name: event.target.value } });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.state.passangers.push(this.state.passanger);
    let passangers = this.state.passangers;
    this.setState({ passangers: passangers });
    this.setState({ passanger: { name: "" } });
  };

  render() {
    const wheels = [
      { color: "red", name: "wheel1" },
      { color: "green", name: "wheel2" },
      { color: "blue", name: "wheel3" },
      { color: "yellow", name: "wheel4" }
    ];

    return (
      <div>
        <h1>This is the bus</h1>
        <div>
          <p>Add passanger</p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='name'></label>
            <input
              type='text'
              name='name'
              value={this.state.passanger.name}
              onChange={this.handleChange}></input>

            <button type='submit' value='Submit'>
              Add
            </button>
          </form>
          <div>
            <p>Passangers:</p>
            {this.state.passangers.map((passanger, index) => {
              return <p key={index}>{passanger.name}</p>;
            })}
          </div>
        </div>
        {wheels.map((item, index) => {
          return <Wheel key={"item" + index} wheel={item} />;
        })}
      </div>
    );
  }
}

export default Bus;
