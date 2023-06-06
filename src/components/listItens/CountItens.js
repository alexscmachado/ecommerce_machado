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
                {/*<button onClick={()=> onChange(-1)}>-</button>*/}
                <BsDashSquare className="dashButton" onClick={() => onChange(-1)} />
                <p className="inputNumber">{qtd}</p>
                <BsPlusSquare className="plusButton" onClick={() => onChange(+1)} />
                {/*<button onClick={()=> onChange(+1)}>+</button>*/}
            </div>
        </div>
    )
}

{/* PRIMEIRA IMPLANTAÇÃO DOS BOTÕES DE QUANTIDADE
    function CountItens({ stock = 15, initial = 1, onAdd }){
    const [itensNumber, setIntensNumber] = useState(1)

    return (
           
            <div className="countItens"> 
                <div className="countItensContainer" >
                    {itensNumber<=1?<BsDashSquare/>:<BsDashSquare  className= "dashButton" onClick={()=>{setIntensNumber(anterior=>anterior-1)}}/>}
                    <input className="inputNumber" type="text" value= {itensNumber} />
                    <BsPlusSquare className= "plusButton"  onClick={()=>{if(itensNumber < stock ){setIntensNumber(anterior=>anterior+1)}}}/>
                </div>     
                     
            {/*<button className="addButton"  onClick={()=>{
               alert(itensNumber + " Produto(s) adicionado ao carrinho")
            }}>Adicionar ao carrinho </button>
            </div>
    )
}*/}
export default CountItens
