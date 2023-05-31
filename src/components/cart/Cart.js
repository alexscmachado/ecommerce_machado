import React, { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";


function CartItem({ cardItem }) {
    const { removeCart } = useCartContext();

    return (
        <div className="container  cardDetailsContainer">
            <div className="cardDetailImageContent" >
                <img src={cardItem?.imagem} className=" cardDetailsImage" alt="Laptop" />
            </div>
            <div className="cardDetailsItensContent">
                <p>{cardItem?.nome}</p>
                <p className=" CardDetailsNome ">Preço: R$ {cardItem?.preco}</p>
                <p>Quantidade:  {cardItem?.qtd}</p>
                <p>Valor Total: R$ {cardItem?.qtd * parseFloat(cardItem?.preco)}</p>
                <button className="buyButton btn btn-primary" onClick={() => removeCart(cardItem?.id)}>Remover Item</button>
            </div>
        </div>
    )
}

export default CartItem
