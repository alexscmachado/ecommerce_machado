import React, { useEffect, useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import CartItem from "../cart/Cart";
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { Row, Col } from "react-bootstrap";


function Carrinho(cardItem) {
    const { itens, clear, getTotal, createOrder } = useCartContext();
    const frete = 10.5;
    const desconto = 0.10;
    const [varFrete, setVarFrete] = useState(0)
    
    //tentando criar uma função que zere o valor do frete quando o carrinho estiver vário ou quando clicar 
    //no botão "esvaziar carrinho"
    function handleOnChangeFrete(FreteVar) {
        setVarFrete(FreteVar);
    }

    function salvarOrder() {
        const order = createOrder();
        const db = getFirestore();
        const refCollection = collection(db, "orders");
        addDoc(refCollection, order).then(({id}) => console.log(`O número da sua ordem de é: ${id}`))
    }

    return (
        <div className="cart-container">
            <Row>
                <Col sm={8}>
                    <ul>
                        {itens.map((p) => (
                            <CartItem key={p.id} cardItem={p} />
                        ))}
                    </ul>
                </Col>
                <Col sm={4}>
                    <p className="cartSubTotal">Subtotal: R$ {getTotal()}</p>
                    <p className="cartSubTotal">Descontos: R${(getTotal() * desconto).toFixed(2)}</p>
                    <p className="cartSubTotal">Frete: R$ {frete}</p>
                    <p className="cartTotal">Total: R$ {(getTotal() - (getTotal() * desconto) + frete).toFixed(2)}</p>
                    <button className="Button btn btn-secondary" onClick={createOrder}>Criar Ordem</button>
                    <p></p>
                    <button className="Button btn btn-secondary" onClick={salvarOrder}>Salvar Ordem</button>
                    <p></p>
                    <button className="Button btn btn-secondary" onClick={() => { clear(); handleOnChangeFrete(0); setVarFrete(0) }}>Esvaziar o Carrinho</button>
                </Col>
            </Row>
        </div>
    )
}

export default Carrinho
