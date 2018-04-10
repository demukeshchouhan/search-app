import React, { Component } from "react";
import DropDown from "./DropDown";

export default class SearchBar extends Component {
  state = { active: false };

  handleStateChange = e => {
    if (this.searchBar.value.length > 0) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };
  handleChange = () => {
    this.props.handleSearchChange(this.searchBar);
    this.handleStateChange();
  };
  render() {
    return (
      <div className="search_bar">
        <input
          type="text"
          placeholder="Search"
          onChange={this.handleChange}
          ref={input => (this.searchBar = input)}
        />
        {this.state.active ? <DropDown data={this.props.filteredUser} /> : null}
      </div>
    );
  }
}
