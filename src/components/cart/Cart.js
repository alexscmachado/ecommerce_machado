import React from "react";
import { useCartContext } from "../../contexts/CartContext";


function CartItem({ cardItem }) {
    const {  getItemQtd, removeCart, sumTotal } = useCartContext();

    return (
        <div className="container  cartContainer">
            <div className="cardDetailImageContent" >
                <img src={cardItem?.imagem} className=" cart-image" alt="Laptop" />
            </div>
            <div className="carDetailsItensContent">
                <p className="cart-title">{cardItem?.nome}</p>
                <p className="cart-price">Preço: R$ {cardItem?.preco}</p>
                <p className="cart-qtd">Quantidade:  {getItemQtd()}</p>
                <p className="cart-ItemTotal">Valor Total: R$ {sumTotal}</p>
                <button className="buyButton btn btn-secondary" onClick={() => removeCart(cardItem?.id)}>Remover Item</button>
            </div>
        </div>
    )
}

export default CartItem
