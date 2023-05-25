import React, { useState } from "react";
import './Input.css'

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className="Input"> 
            <div style={{ 
                display: 'flex',
                flexDirection: 'column' 
                }}> 
                <input value={valor} onChange={quandoMudar} /> // componente controlado
                <input value={valor} readOnly />  // componente controlado, usa o readOnly para não permitir alteração, requerido devido ao componente controlado 
                <input value={undefined} readOnly />   // componente não controlado
            </div>
        </div>
    )
}