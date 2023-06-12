import { useContext, useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";

function NavBarCarrinho() {
    const valor = useCartContext();
    console.log(valor)

    const qtdProdutos = valor?.getItemQtd() || 0

    return (
        <Link to="/cart">
            <div className="qtdCarrinho">{qtdProdutos}</div>
            <BiShoppingBag className="carrinho" />
        </Link>
    )
}
export default NavBarCarrinho
