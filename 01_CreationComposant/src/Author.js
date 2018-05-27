import React, { Component } from "react";

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <button className="btn btn-primary" onClick={this.props.showName}>
        Dévoilez le plus beau des prénoms
      </button>
    );
  }
}

export default Author;
