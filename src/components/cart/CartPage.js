import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import CartItem from "../cart/Cart";
//import { useParams } from "react-router-dom";
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { Row, Col } from "react-bootstrap";
//import { productsDetails } from "../datails/mockDetails/productsDetails";


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
    //const [loading, setLoading] = useState(true);
    //const { itemId } = useParams();

    /*function salvarOrder() {
        const order = createOrder();

        const db = getFirestore();
        const refCollection = collection(db, "orders");
        /*fiz certinho a função para adicionar a ordem no firebase, só que está dando erro =/, tirei print do erro e 
        to colocando no pull request
        addDoc(refCollection, order).then(({id}) => console.log(`O número da sua ordem de é: ${id}`))
    }*/

    return (
        <div className="cart-container">
            <Row>
                <Col sm={8}>
                    <ul>
                        {itens.map(p => <li key={p.id}><CartItem cardItem={p} /></li>)}
                        {/*<li><CartItem cardItem={prodCart} /></li>*/}
                    </ul>
                </Col>
                <Col sm={4}>
                    <p className="cartSubTotal">Subtotal: R$ {getTotal()}</p>
                    <p className="cartSubTotal">Descontos: R${getTotal()*desconto}</p>
                    <p className="cartSubTotal">Frete: R$ {frete}</p>
                    <p className="cartTotal">Total: R$ {getTotal()-(getTotal()*desconto)+frete}</p>
                    <button className="Button btn btn-secondary">Criar Ordem</button>
                    <p></p>
                    <button className="Button btn btn-secondary">Salvar Ordem</button>
                    <p></p>
                    <button className="Button btn btn-secondary" onClick={() => {clear(); handleOnChangeFrete(0); setVarFrete(0)}}>Esvaziar o Carrinho</button>
                </Col>
            </Row>
            {/*<ul>
                {itens.map(p => <li key={p.id}><CartItem cardItem={p} /></li>)}
                {/*<li><CartItem cardItem={prodCart} /></li>
            </ul>
            <p className="cartTotal">Valor Total da compra: R$ {getTotal()}</p>
                <Row>
                    <Col><button className="Button btn btn-secondary">Criar Ordem</button></Col>
                    <Col><button className="Button btn btn-secondary">Salvar Ordem</button></Col>
                    <Col><button className="Button btn btn-secondary" onClick={() => clear()}>Esvaziar o Carrinho</button></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col><Link to="/"><button className="buy-Button btn btn-secondary">Continuar Comprando</button></Link></Col>
                </Row>*/}
            {/*<button className="Button btn btn-secondary">Criar Ordem</button>
                <p></p>
                <button className="Button btn btn-secondary">Salvar Ordem</button>
                <p></p>
                <button className="Button btn btn-secondary" onClick={() => clear()}>Esvaziar o Carrinho</button>*/}
        </div>
    )
}

export default Carrinho