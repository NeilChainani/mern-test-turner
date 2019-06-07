import React, { Component } from "react";
import axios from "axios";
const API_URL = "http://localhost:5000/api/titles";
class Title extends Component {
  state = {
    text: "",
    datad: []
  };

  titleSearch() {
    const url = `${API_URL}` + "/" + this.state["text"];
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState = {
          datad: data
        };
      });
  }
  handleInputChange = event => {
    this.setState({ text: event.target.value }, function() {
      console.log(this.state.text);
    });
  };
  titleAll() {
    const url = `${API_URL}`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        console.log(data);
      });
  }
  render() {
    return (
      <div>
        <label>Search Titles</label>
        <input type="text" id="titleInput" onChange={this.handleInputChange} />
        <br />
        <br />
        <button
          type="button"
          onClick={this.titleSearch.bind(this)}
          className="btn btn-primary"
        >
          Search Title
        </button>
        <button
          type="button"
          onClick={this.titleAll.bind(this)}
          className="btn btn-primary"
        >
          Load Everything
        </button>
      </div>
    );
  }
}

export default Title;
