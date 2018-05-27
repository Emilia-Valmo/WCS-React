import React, { Component } from "react";

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.showName = this.showName.bind(this);

  }

  showName(){
    alert(this.props.name)
  }

  render() {
    return (
      <button className="btn btn-primary" onClick={this.showName}>
        Dévoilez le plus beau des prénoms
      </button>
    );
  }
}

export default Author;
