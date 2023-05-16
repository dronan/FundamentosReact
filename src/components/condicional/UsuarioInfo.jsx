import React from "react";
import If from "./If";

export default props => {
    
    const usuario = props.usuario || {}

    return (
        <div> 
            <If test={usuario && usuario.nome}>
                Seja bem bindo(a) <strong>{usuario.nome}</strong>! 
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem bindo(a) <strong>Amigão</strong>! 
            </If>
        </div>
    )
}