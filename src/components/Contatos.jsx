import React, { Component } from 'react'



import Contato from './contato'

//listar os contatos
export default class Contatos extends Component {
    render() {
        return this.props.contatos.map(elementos =>
            <Contato
            contato = {elementos}
            key = {elementos.id}
            deleteContato = {this.props.deleteContato}
            />)
    }
}