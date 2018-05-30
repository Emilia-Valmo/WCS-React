import React, { Component } from 'react';

class MyTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        };
    }

    secondesCount() {
        this.setState({
            timer: this.state.timer + 1
        })
    }

    componentDidMount() {
        setInterval(() => this.secondesCount(), 1000
        )
    }

    componentDidUpdate() {
        console.log("un update a eu lieu");
    }

    render() {
        return (
            <div>
                <h2>My seconds timer : </h2>
                <div>{this.state.timer}</div>
            </div>
        );
    }
}

export default MyTimer;