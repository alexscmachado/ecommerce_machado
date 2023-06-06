import {createContext, useContext, useState} from 'react';
import { productsDetails } from '../components/datails/mockDetails/productsDetails';
import { Timestamp } from 'firebase/firestore';

export const Cart = createContext([]);
export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export default function CartContextProvider({defaultValue={}, children}) {
    const [itens, setItens] = useState([]);
    //{id:1, ammount:5}, {id:2, ammount:7} - exemplo
    //const [item, setItem] = useState()

    function clear(){
        setItens([]);
    }

    const isInTheCart = (id) => itens.find(prod => prod.id === id);

    function getItemQtd(id){
        if (itens.id ===id){
            return itens.reduce((accumulator, currentValue) => parseInt(accumulator + currentValue.qtd), 0)
        }      
    }

    function getTotal() {
        return itens.reduce((accumulator, currentValue) => parseFloat(accumulator + currentValue.preco), 0)
    }

    function addToCart(id, qtd, preco, nome, imagem){
        const itemDetails = productsDetails.find(product => product.id === id)
        const cartItens = [...itens];
        const cartValid = cartItens.find((product) => product.id ===id);

        if (!cartValid) {
            //cartItens.push({id:id, qtd:qtd});
            cartItens.push({ ...itemDetails, qtd: qtd, preco: preco, nome: nome, imagem: imagem });
        } 
        else {
            cartValid.qtd = parseInt(cartValid.qtd + qtd);
        }
        setItens(cartItens);
    }

    function removeCart(id) {
        const cartItens = [...itens];
        const cartValid = cartItens.find((product) => product.id ===id);

        if(cartValid >1){
            const updatedArray = cartItens.map(item => {
                if (item?.id === id) {
                    cartValid.qtd = parseInt(cartValid.qtd - 1);
                    return cartValid;
                }
                return item;
            });
            setItens(updatedArray);
        } else {
            const arrayFilter = cartItens.filter(product => product.id !== id);
            setItens(arrayFilter);
        }
    }

    /*function createOrder() {
        const order = {
            buyer: {
                name: "Cíntia",
                phone: "987545123",
                email: "cintia@gmail.com",
            },
            orderDate: Timestamp.fromDate(new Date()),
            //orderDate: new Date(),
            total: getTotal(),
            items: itens.map((p) => ({
                id: p.id, 
                nome: p.nome, 
                preco: p.preco, 
                qtd: p.qtd})),
        };

        console.log(order)
        return order;
    }*/
     
    return(
        <CartContext.Provider value={{itens, clear, getItemQtd, addToCart, removeCart, isInTheCart, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}


//const carrinho = useContext(ItemDetails)
//carrinho.forEach(p => p.cardItem)
//console.log(carrinho)


/*import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { CartCarrinho } from "./UserContext";

//export default function CartContext() {
//    const usuario = useContext(UserContext)
//    return (<div>O usuário logado é: {usuario}</div>)
//}

export default function Carrinho() {
    const carrinho = useContext(CartCarrinho)
    return (<div>Qtd no carrinho</div>)
}*/

