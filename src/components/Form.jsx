import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className="Form-contato content">
                <h1 className="title contato-title">Contato</h1>
                <img src="../src/img/contact-pic" alt=""/>
                <div className="form">
                    <form className="contact-form">
                        <div className="item-form">
                            <label htmlFor="name">Nome</label>
                            <input type="text" name="name" id=""/>
                        </div>
                        <div className="item-form">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id=""/>
                        </div>
                        <div className="item-form">
                            <label htmlFor="message">Mensagem</label>
                            <textarea name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="item-form">
                            <button type="submit">Enviar</button>
                        </div>

                        
                        
                    </form>
                </div>
            </div>
        )
    }
}
