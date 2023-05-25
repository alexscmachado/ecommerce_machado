import { useContext } from "react";
import {BiShoppingBag} from "react-icons/bi";
import { Link } from "react-router-dom";
import { Cart, useCartContext } from "../../contexts/CartContext";
import ItemDetails from "../datails/ItemDetails";

function NavBarCarrinho(){
    //const valorCart = useContext(Cart);
    const valor = useCartContext();
    console.log(valor)

    //let qdtProdutos = 0
    const qtdProdutos = valor?.getItemQtd() || 0
    //valor.itens.forEach(p => qdtProdutos += p.ammount);

    return(        
        <Link to="/cart">
            <div className="carrinho">{qdtProdutos}</div>
            <BiShoppingBag className="carrinho"/> 
        </Link>   
    )
}
export default NavBarCarrinho

export function Carrinho() {
    //const valor = useCartContext();
    const {itens, getItemQtd, clear, removeCart} = useCartContext();

    return(
        <div>
            <div>A quantidade é {getItemQtd()}</div>
            <ul>
                {itens.map(p => <li key={p.id}>p.ammount</li>)}
            </ul>

            <button className="buyButton btn btn-primary" onClick={() => removeCart()}>Remover Item</button>

            <Link><button className="buyButton btn btn-primary" onClick={() => clear()}>Esvaziar o Carrinho</button></Link>
        </div>
    )
}
