import React, { Component } from 'react'
import "./index.css"
import '../App.css'

export default class ContatoForm extends Component {
    
    state = {
        nome: '',
        telefone: '',
        email: ''
    }
    
    onSubmit = (e) => {
        this.props.addContato(this.state.nome, this.state.telefone, this.state.email);
        e.preventDefault();
    }

    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        return (
            <div className="container">
                
                <h1 className="display-5">Contatos</h1>
                <br/>

                <form className="form-inline" onSubmit={this.onSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                    <label>Nome: </label>
                    <input type="text" 
                    className="form-control" 
                    name="nome"
                    id="Nome" 
                    onChange={this.onChange}
                    value={this.state.nome}/>
                </div>

                <div className="form-group mx-sm-3 mb-2">
                    <label>Telefone: </label>
                    <input type="text" 
                    className="form-control" 
                    name="telefone"
                    id="Telefone"
                    onChange={this.onChange}
                    value={this.state.telefone}/>
                </div>

                <div className="form-group mx-sm-3 mb-2">
                    <label>Email</label>
                    <input type="text" 
                    className="form-control" 
                    name="email"
                    id="exemploInputEmail1" 
                    onChange={this.onChange}
                    value={this.state.email}/>
                </div>

                <button type="submit" className="btn btn-primary mb-2">Cadastrar Contato</button>
                </form>

            </div>
        )
    }
}