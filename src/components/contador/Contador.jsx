import React, { Component } from "react";
import "./Contador.css";
export default class Contador extends Component {
        
    state = {
            numero: this.props.numeroInicial,
            passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (ev) => {
        this.setState({
            passo: +ev.target.value // o + converte para inteiro
        })
    }

    render() {
     
        return (
            <div className="Contador"> 
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                <label htmlFor="passoInput">Passo </label>
                <input 
                    id="passoInput" 
                    type="number" 
                    value={this.state.passo} 
                    onChange={this.setPasso} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )

    }

}