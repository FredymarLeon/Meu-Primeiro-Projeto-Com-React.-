import React, { Component } from 'react'
import "./index.css"
import FotoDeContato from './Imagens/FotoDeContato.jpg';

import '../App.css'

export default class contato extends Component {
    FotoDeContato
    state = {
        nome: this.props.contato.nome,
        email: this.props.contato.email,
        telefone: this.props.contato.telefone,
        disabled: true
    }

    handleGameClik() {
    this.setState( {disabled: !this.state.disabled} )
  } 

  EstiloEditanto() {
    return {  
        color: this.state.disabled ? 'white' : '#0f0f0ff0',
        fontSize: this.state.disabled ? '1rem' : '0.8rem',
        border: "none",
        padding: "15px",
        textDecoration: "none",
        background: "#f2d096"
    }
}
    onSubmit = (e) => {
        e.preventDefault();
    }
    
    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {       
        const {contato} = this.props;
        
        return (
            <div className="container" style={CartaoContato}>

                <div className="card" >
                    <img src={FotoDeContato} className="card-img-top" alt="ImagemDeContato"/>
                    <div className="card-body">

                        <form onSubmit={this.onSubmit}>
                            <h5 className="card-title">Nome</h5>
                            <div className="form-group row">
                            <input type="text"
                            id="nome" 
                            onChange={this.onChange} 
                            name ="nome" 
                            value={this.state.nome}
                            disabled = {(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <h5 className="card-title">Email</h5>
                            <div className="form-group row">
                            <input type="text" 
                            onChange={this.onChange} 
                            name ="email" 
                            value={this.state.email}
                            disabled = {(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <h5 className="card-title">Telefone</h5>
                            <div className="form-group row">
                            <input type="text" 
                            onChange={this.onChange} 
                            name ="telefone" 
                            value={this.state.telefone}
                            disabled={(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <button type="submit" className="btn btn-secundary"
                                style={this.EstiloEditanto()}
                                onClick = {this.handleGameClik.bind(this)}>
                                Atualizar
                            </button>
                            {"  "}
                            <button className="btn btn-primary" 
                                style={btnApagar}
                                onClick = {this.props.deleteContato.bind(this, contato.id)}>
                                Apagar
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

//Objetos JavaScript para Styles:

const CartaoContato = {
    width: "20rem",
    margin: "2% 3% 1% 4%",
    display: "inline-block",
    align: "center",
}

const btnApagar = {
    border: "none",
    color: "black",
    padding: "15px",
    textDecoration: "none",
    background: "#304d63"
}