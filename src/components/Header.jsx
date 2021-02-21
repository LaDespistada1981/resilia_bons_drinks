import '../css/Header.css'
import '../css/Color.css'
import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div className="Header medium">
                <a href="#" target="_blank" rel="">Drinks</a>
                <a href="#" target="_blank" rel="">Sobre Nós</a>
                <a className="logo" href="#" target="_blank" rel="">Bons Drinks</a>
                <a href="#" target="_blank" rel="">Nosso Time</a>
                <a href="#" target="_blank" rel="">Contato</a>
            </div>
        )
    }
}
