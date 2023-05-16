import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Fabio" idade={15} nerd={false}></DiretaFilho>
        </div>
    )
}