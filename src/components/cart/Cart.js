import React from "react";
import { useCartContext } from "../../contexts/CartContext";


function CartItem({ cardItem }) {
    const { itens, removeCart } = useCartContext();

    return (
        <div className="container  cartContainer">
            <div className="cardDetailImageContent" >
                <img src={cardItem?.imagem} className=" cart-image" alt="Laptop" />
            </div>
            <div className="carDetailsItensContent">
                <p className="cart-title">{itens.nome}</p>
                <p className="cart-price">Preço: R$ {cardItem?.preco}</p>
                <p className="cart-qtd">Quantidade:  {cardItem?.qtd}</p>
                <p className="cart-ItemTotal">Valor Total: R$ {cardItem?.qtd * parseFloat(cardItem?.preco)}</p>
                <button className="buyButton btn btn-secondary" onClick={() => removeCart(cardItem?.id)}>Remover Item</button>
            </div>
        </div>
    )
}

export default CartItem
