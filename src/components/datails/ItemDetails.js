import React, { useState, useEffect, useContext } from "react";
import CountItens from "../listItens/CountItens";
import { Link } from "react-router-dom";
import CartContextProvider, { useCartContext } from "../../contexts/CartContext";



function ItemDetails({ cardItem }) {
    const [ammount, setAmmount] = useState(1);
    const { addToCart, isInTheCart } = useCartContext();
    const naoAdicionado = !isInTheCart(cardItem.id);


    function handleOnChangeQtd(qtd) {
        setAmmount(qtd);
    }

    return (
        <div className="container  cardDetailsContainer">
            <div className="cardDetailImageContent" >
                <img src={cardItem.imagem} className=" cardDetailsImage" alt="Laptop" /><a href=""></a>
            </div>
            <div className="cardDetailsItensContent">
                <p><a href="#!" className="CardDetailsNome text-dark">{cardItem.nome}</a></p>
                <p className="CardDetailsPreco">R$ {cardItem.preco}</p>
                <ul className="CardDetailsDescricao">Descrição do produto:
                    <li className="CardDetailsDescricaoItem">{cardItem.descricao}</li>
                </ul>
                <p className="CardDetailsEstoque"> Em estoque: {cardItem.estoque}</p>
                {naoAdicionado ? <CountItens
                    stock={cardItem.estoque}
                    qtd={ammount}
                    preco={cardItem.preco}
                    onChangeQtd={handleOnChangeQtd} /> : <Link to="/cart"><button className="buyButton btn btn-secondary">
                        Ir para o Carrinho</button></Link>}
                <button className="buyButton btn btn-secondary" onClick={() => {
                    setAmmount(1);
                    addToCart(cardItem.id, ammount, cardItem.preco, cardItem.nome, cardItem.imagem);
                    alert(ammount + " Produto(s) adicionado ao carrinho")}}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default ItemDetails
