import React, { Component } from 'react'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "mon@email.com",
            password: "monPassw0rd",
            passwordbis: "",
            name: "James",
            lastname: "Bond"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state);
    }


    render() {
        let myJson = JSON.stringify(this.state)
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <h1>{myJson}</h1>
                <div className="form-group">
                    <label forhtml="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
                </div>
                <div className="form-group">
                    <label forhtml="exampleInputPassword1">Mot de passe</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mot de passe" onChange={e => this.setState({ password: e.target.value })} />
                </div>
                <div className="form-group">
                    <label forhtml="exampleInputPassword1">Mot de passe de vérification</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Mot de passe" onChange={e => this.setState({ passwordbis: e.target.value })} />
                </div>
                <div className="form-group">
                    <label forhtml="exampleInputEmail1">Nom</label>
                    <input type="text" className="form-control" placeholder="Nom" onChange={e => this.setState({ name: e.target.value })} />
                </div>
                <div className="form-group">
                    <label forhtml="exampleInputEmail1">Prénom</label>
                    <input type="text" className="form-control" placeholder="Prénom" onChange={e => this.setState({ lastname: e.target.value })} />
                </div>

                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        );
    }
}

export default SignUp;