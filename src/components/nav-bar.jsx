import React, { Component } from 'react'
import "./index.css"

class Navbar extends Component {

    state = {
        busqueda: '',
        contatos: this.props.contatos
    }

    onSubmit = (e) => {
        console.log(this.state.busqueda)
        this.props.searchContato(this.state.busqueda)
        e.preventDefault();
    }

    onChange = async (e) => {
        e.persist();
        console.log(e.target.name, e.target.value)
        await this.setState({
            busqueda: e.target.value,
            [e.target.name]: e.target.value
        })
        this.props.searchContato(this.state.busqueda)
        
    }

    render() {
        
        
        return <div className="container">
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Agenda de Contatos</span>
            
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <input className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Buscar Contatos"
                        name="busqueda"
                        onChange={this.onChange} 
                        aria-label="Search"/>
                </form>

            </nav>
        </div>
    }
}

export default Navbar;