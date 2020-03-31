import React, { Component } from "react";
import Profile from "./Profile";

class ProfilePage extends Component {
  render() {
    const profile = { hobby: "plants", age: 21, name: "Razvan" };
    const profile1 = { hobby: "cars", age: 21, name: "Andrei" };
    const profile2 = { hobby: "clothes", age: 21, name: "Paulina" };

    const profiles = [profile, profile1, profile2];

    return (
      <div>
        <h1>Profile Page</h1>
        {/* <Profile profile={profile} /> */}
        {profiles.map((profile, index) => {
          return <Profile key={"profile" + index} profile={profile} />;
        })}
      </div>
    );
  }
}

export default ProfilePage;
