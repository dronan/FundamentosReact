import React from "react";
import If, { Else } from "./If";

export default props => {
    
    const usuario = props.usuario || {}

    return (
        <div> 
            <If test={usuario && usuario.nome}>
                Seja bem bindo(a) <strong>{usuario.nome}</strong>! 
                <Else>
                Seja bem bindo(a) <strong>Amigão</strong>! 
                </Else>
            </If>
        </div>
    )
}