import React from "react";
import "./App.css";
import ProfilePage from "./components/profile_page/ProfilePage";
import Bus from "./components/profile_page/Bus";
import CarPage from "./components/car_page/CarPage";
import ButtonWithProps from "./components/button/ButtonWithProps";
import ButtonWithChildren from "./components/button/ButtonWithChildren";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageToRender: <Bus />
    };
  }

  handleButtonClicked = text => {
    console.log(text);
  };

  render() {
    const { pageToRender } = this.state;

    return (
      <div className='App'>
        <ButtonWithProps
          buttonText='Bus page'
          onButtonClicked={() => this.setState({ pageToRender: <Bus /> })}
        />
        <ButtonWithProps
          buttonText='Profile page'
          onButtonClicked={() =>
            this.setState({ pageToRender: <ProfilePage /> })
          }
        />
        <ButtonWithProps
          buttonText='CarPage'
          onButtonClicked={() => this.setState({ pageToRender: <CarPage /> })}
        />
        {/* <button
          buttonText='Bus page'
          onClick={() => {
            this.setState({ pageToRender: <Bus /> });
          }}>
          Bus page
        </button> */}
        <ButtonWithChildren>My text</ButtonWithChildren>
        {pageToRender}
      </div>
    );
  }
}

export default App;
