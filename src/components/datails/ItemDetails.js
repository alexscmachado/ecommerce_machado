import React, { useState, useEffect, useContext } from "react";
import CountItens from "../listItens/CountItens";
import { Link } from "react-router-dom";
import CartContextProvider, { useCartContext } from "../../contexts/CartContext";



function ItemDetails({ cardItem }) {
    const [ammount, setAmmount] = useState(1);
    const { addToCart, isInTheCart } = useCartContext();
    const naoAdicionado = !isInTheCart(cardItem.id);

    //const InputComponent = true ? CountItens : InputComponent;

    function handleOnChangeQtd(qtd) {
        setAmmount(qtd);
    }

    return (
        <div className="container  cardDetailsContainer">
            <div className="cardDetailImageContent" >
                <img src={cardItem.imagem} className=" cardDetailsImage" alt="Laptop" /><a href=""></a>
            </div>
            <div className="cardDetailsItensContent">
                <p><a href="#!" className="cardDetailsImage text-dark">{cardItem.nome}</a></p>
                <p className=" CardDetailsNome ">R$ {cardItem.preco}</p>
                <p> Descrição do produto: {cardItem.descricao}</p>
                <p> Em estoque: {cardItem.estoque}</p>
                {/*<p>Quantidade: <CountItens/></p> - PRIMEIRA APLICAÇÃO DA QUANTIDADE
                    <button type="button" className=" buyButton btn btn-primary">Comprar</button>*/}
                {/* ABAIXO A APLICAÇÃO APÓS A AULA 9 - EVENTOS*/}
                {naoAdicionado ? <CountItens
                    stock={cardItem.estoque}
                    qtd={ammount}
                    onChangeQtd={handleOnChangeQtd} /> : <Link to="/cart"><button className="buyButton btn btn-primary">
                        Ir para o Carrinho</button></Link>}
                <button className="buyButton btn btn-primary"
                    onClick={() => {
                    setAmmount(1);
                    addToCart(cardItem.id, ammount);
                    alert(ammount + " Produto(s) adicionado ao carrinho")
                    }}>Adicionar ao carrinho
                 </button>
            </div>
        </div>
    )
}

export default ItemDetails
