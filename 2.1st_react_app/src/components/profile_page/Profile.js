import React from "react";

class Profile extends React.Component {
  render() {
    //Destructuring assignment
    const { profile } = this.props;

    return (
      <div>
        <h2> My Profile Component</h2>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Hobby: {profile.hobby}</p>
      </div>
    );
  }
}

export default Profile;
