import { useContext, useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";

function NavBarCarrinho() {
    //const valorCart = useContext(Cart);
    const valor = useCartContext();
    console.log(valor)

    //let qdtProdutos = 0
    const qdtProdutos = valor?.getItemQtd() || 0
    //valor.itens.forEach(p => qdtProdutos += p.ammount);

    return (
        <Link to="/cart">
            <div className="qtdCarrinho">{qdtProdutos}</div>
            <BiShoppingBag className="carrinho" />
        </Link>
    )
}
export default NavBarCarrinho