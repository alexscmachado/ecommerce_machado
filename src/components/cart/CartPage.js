import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import CartItem from "../cart/Cart";
import { useParams } from "react-router-dom";
import { collection, addDoc, getFirestore} from 'firebase/firestore';
import { productsDetails } from "../datails/mockDetails/productsDetails";


function Carrinho(cardItem) {
    const { itens, clear, getTotal, createOrder } = useCartContext();
    //const [loading, setLoading] = useState(true);
    //const { itemId } = useParams();

    function salvarOrder() {
        const order = createOrder();

        const db = getFirestore();
        const refCollection = collection(db, "orders");
        /*fiz certinho a função para adicionar a ordem no firebase, só que está dando erro =/, tirei print do erro e 
        to colocando no pull request */
        addDoc(refCollection, order).then(({id}) => console.log(`O número da sua ordem de é: ${id}`))
    }

    return (
        <div>
            <ul>
                {itens.map(p => <li key={p.id}><CartItem cardItem={p} /></li>)}
                {/*<li><CartItem cardItem={prodCart} /></li>*/}
            </ul>
            <p>Valor Total da compra: R$ {getTotal()}</p>
            <button className="buyButton btn btn-primary" onClick={createOrder}>Criar Ordem</button>
            <p></p>
            <button className="buyButton btn btn-primary" onClick={salvarOrder}>Salvar Ordem</button>
            <p></p>
            <Link><button className="buyButton btn btn-primary" onClick={() => clear()}>Esvaziar o Carrinho</button></Link>
        </div>
    )
}

export default Carrinho