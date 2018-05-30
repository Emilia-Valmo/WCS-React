import React, { Component } from 'react';
import './Password.css';


class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(e) {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        const regexMdpFaible = new RegExp('^[a-z0-9]{1,5}$');
        if (regexMdpFaible.test(this.state.password) === true) {
            e.preventDefault();
            alert("Votre mot de passe est trop faible");
        }
    }

    render() {
        let errorMdpFaible = "";
        const regexMdpFaible = new RegExp('^[a-z0-9]{1,5}$');

        let errorMdpMoyen = "";
        const regexMdpMoyen = new RegExp("^[a-z0-9]{6,14}$", "gi");

        let errorMdpFort = "";
        const regexMdpFort = new RegExp("^[\\w\\W]{6,14}", "gi");

        if (regexMdpFaible.test(this.state.password)) {
            errorMdpFaible = "Mot de passe faible ";

        } else if ((regexMdpMoyen.test(this.state.password) === true)) {
            errorMdpMoyen = "Mot de passe moyen ";

        } else if (regexMdpFort.test(this.state.password) === true) {
            errorMdpFort = "Mot de passe fort ";

        } else {
            errorMdpFort = "";
        }

        return (
            <form className="container" noValidate onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="inputPassword" >Mot de passe</label>
                    <input type="password" name="password" className="form-control mx-auto" id="inputPassword" placeholder="Mot de passe" required onChange={this.handleChange} />
                    {errorMdpFaible !== "" ? (<div className="alert alert-danger mx-auto">{errorMdpFaible}</div>) : null}
                    {errorMdpMoyen !== "" ? (<div className="alert alert-warning mx-auto">{errorMdpMoyen}</div>) : null}
                    {errorMdpFort !== "" ? (<div className="alert alert-success mx-auto">{errorMdpFort}</div>) : null}
                </div>
                <br />
                <div className="mx-auto">
                    <button className="btn btn-primary" type="submit">Valider</button>
                </div>
            </form>
        );
    }
}

export default Password;