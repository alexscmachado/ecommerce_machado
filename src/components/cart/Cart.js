import React, { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { productsDetails } from "../datails/mockDetails/productsDetails";
import CountItens from "../listItens/CountItens";
import { useParams } from "react-router-dom";


function CartItem({ }) {
    const { itens, setItens, getItemQtd, clear, removeCart, sumTotal } = useCartContext();
    const [ammount, setAmmount] = useState(1);
    const { itemId } = useParams();

    function ClickOnChangeQtd(qtd) {
        setAmmount(qtd);
    }
    
    function getProductsDetails() {
        return new Promise((resolve, rejected) => {
            resolve(productsDetails.find(p => p.id === parseInt(itemId)));
        })
    }

    function getProductsDetails() {
        return new Promise((resolve, rejected) => {
            resolve(productsDetails.find(p => p.id === parseInt(itemId)));
        })
    }

    return (
        <div className="container  cardDetailsContainer">
            <div className="cardDetailImageContent" >
                <img src={itens.imagem} className=" cardDetailsImage" alt="Laptop" />
            </div>
            <div className="cardDetailsItensContent">
                <p>{itens.nome}</p>
                <p className=" CardDetailsNome ">R$ {itens.preco}</p>
                <p>Quantidade:  {getItemQtd()}</p>
                <p>Valor Total: R$ {sumTotal}</p>
                <button className="buyButton btn btn-primary" onClick={() => removeCart(itens.id)}>Remover Item</button>
            </div>
        </div>
    )
}

export default CartItem
