import React, { Component } from "react";

class Table extends Component {
  render() {
    const { citiesObject } = this.props;
    return (
      <div>
        <h1>This is my table</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table>
            <thead>
              <tr>
                {Object.keys(citiesObject[0]).map((key, index) => {
                  return <th key={("th-", index)}>{key}</th>;
                })}
              </tr>
            </thead>

            {citiesObject.map((item, index) => {
              return (
                <tbody key={("item-", index)}>
                  <tr>
                    {Object.keys(item).map((keyItem, index) => {
                      return (
                        <td key={("the-", index)}>{item[`${keyItem}`]}</td>
                      );
                    })}
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
