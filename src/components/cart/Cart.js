import React from "react";
import { useCartContext } from "../../contexts/CartContext";

function CartItem({ cardItem }) {
    const {  getItemQtd, removeCart, sumTotal } = useCartContext();


    return (
        <div className="container  cartContainer">
            <div className="cardDetailImageContent" >
                <img src={cardItem?.imagem} className=" cardDetailsImage" alt="Laptop" />
            </div>
            <div className="cardDetailsItensContent">
                <p>{cardItem?.nome}</p>
                <p className=" CardDetailsNome ">R$ {cardItem?.preco}</p>
                <p>Quantidade:  {cardItem?.qtd}</p>
                <p>Valor Total: R$ {cardItem?.qtd * Number(cardItem?.preco)}</p>
                <button className="buyButton btn btn-primary" onClick={() => removeCart(cardItem?.id)}>Remover Item</button>
            </div>
        </div>
    )
}

export default CartItem
