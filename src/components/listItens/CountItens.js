import React, { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";


function InputCount({ stock, qtd, onChangeQtd }) {
    function onChange(e) {
        let newValue = e.target.value
        if (newValue <= 0) {
            newValue = 1
        } else if (newValue > stock) {
            newValue = stock
        }
        onChangeQtd(newValue)
    }
    return (
        <input type="number" value={qtd} onChange={onChange} />
    )
}

//mudei o nome da função ButtonCount para CountItens, na qual estávamos usando
function CountItens({ stock, qtd, onChangeQtd }) {
    function onChange(value) {
        let newValue = parseInt(qtd) + value
        if (newValue <= 0) {
            newValue = 1
        } else if (newValue > stock) {
            newValue = stock
        }
        onChangeQtd(newValue)
    }
    return (
        <div className="countItens">
            <div className="countItensContainer" >
                <p className="quantidade">Quantidade: </p>
                <BsDashSquare className="dashButton" onClick={() => onChange(-1)} />
                <p className="inputNumber">{qtd}</p>
                <BsPlusSquare className="plusButton" onClick={() => onChange(+1)} />
            </div>
        </div>
    )
}

export default CountItens
