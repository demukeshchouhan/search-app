import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import SelectBox from "./components/SelectBox";
import Button from "./components/Button";
import axios from "axios";
import _ from "lodash";
import "./App.css";

class App extends Component {
  state = {
    data: [],
    filteredUser: ""
  };
  handleSubmit() {
    console.log("handleSubmit");
  }
  handleSearchChange = evt => {
    const users = this.state.data;
    const filteredUser = _.filter(users, function(user) {
      return _.startsWith(user.name.toLowerCase(), evt.value.toLowerCase());
    });
    this.setState({ filteredUser });
  };
  componentDidMount = () => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users"
    }).then(res => {
      this.setState({
        data: res.data
      });
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <SearchBar
          handleSearchChange={this.handleSearchChange}
          filteredUser={this.state.filteredUser}
        />
        <SelectBox />
        <SelectBox />
        <Button handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
