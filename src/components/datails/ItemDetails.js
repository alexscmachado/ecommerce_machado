import React, { useState, useEffect, useContext } from "react";
import CountItens from "../listItens/CountItens";
import { Link } from "react-router-dom";
import CartContextProvider, { useCartContext } from "../../contexts/CartContext";



function ItemDetails({ cardItem }) {
    const [ammount, setAmmount] = useState(1);
    const { addToCart, isInTheCart } = useCartContext();
    const naoAdicionado = !isInTheCart(cardItem.id);

    /* Tentando fazer a validação se o item existe no carrinho ou não:
    const valorCart = useCartContext();
    
    //let produtQtd = 0;
    //valorCart.itens.forEach(p => produtQtd += p.ammount);
    let productId = [];
    valorCart.find(p=> productId.id === p.id);

    const naoAdicionado = true;
    if (productId.id !== cardItem.id){
        naoAdicionado=false;
    }*/


    function handleOnChangeQtd(qtd) {
        setAmmount(qtd);
    }

    /*function addCart(qtd) {
        if (cardItem.stock) {
            console.log(`Item adicionado ao carrinho: ${cardItem.id} com ${qtd}`)
        }
    }*/

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
