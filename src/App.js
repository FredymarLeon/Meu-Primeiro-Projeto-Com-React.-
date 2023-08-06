import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import contatos from './BaseDeDatos/contatos.json'

import Navbar from './components/nav-bar';
import Contatos from './components/Contatos';
import ContatoForm from './components/ContatoForm';


class App extends Component {
  
  
  state = {
    contatos: contatos
  }
  
  addContato = (nome, telefone, email) => {
    
    const newContato = {
      nome: nome,
      email: email,
      telefone: telefone,
      id: this.state.contatos.length
    }

    this.setState({
      contatos: [...this.state.contatos, newContato]
    })
  }

  deleteContato = (id) => {
    const newContato = this.state.contatos.filter(contato => contato.id !==id);
    this.setState({
      contatos: newContato
    })
  }


  searchContato = (dato) => {
    const searchResults = this.state.contatos.filter((contato) => {
      return (
        contato.nome.includes(dato) ||
        contato.email.includes(dato) ||
        contato.telefone.includes(dato) 
      );
    });
  
    this.setState({ contatos: searchResults });
  }

  
  render() {
    return <div>
      <Navbar
        contatosNews = {this.state.contatos}
        key = {contatos.id}
        searchContato = {this.searchContato}/>

      <ContatoForm addContato = {this.addContato}/>
      <Contatos 
      contatos={this.state.contatos} 
      deleteContato = {this.deleteContato}/>
    </div>
  }
}

export default App;