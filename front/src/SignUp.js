import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "test@test.com"
        };
        this.updateEmailField = this.updateEmailField.bind(this);
    }

    updateEmailField(e) {
        this.setState({
            email: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.email}</h1><input type="email" name="email" onChange={this.updateEmailField} placeholder="Entrer un email" style={{width: "30%", margin: "auto"}}  class="form-control"/>
            </div>
        );
    }
}

export default SignUp;