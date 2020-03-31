import React, { Component } from "react";
import Table from "../../components/table/Table";
import { ClipLoader } from "react-spinners";
// import citiesJSON from "../../city_list.json";

class Cities extends Component {
  state = {
    citiesObject: Object,
    loading: false
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://indian-cities-api-nocbegfhqg.now.sh/cities"
      );
      const cities = await response.json();
      if (cities) {
        this.setState({ citiesObject: cities, loading: true });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Table citiesObject={this.state.citiesObject} />
        </div>
      );
    } else {
      return (
        <div>
          <ClipLoader />
        </div>
      );
    }
  }
}

export default Cities;
