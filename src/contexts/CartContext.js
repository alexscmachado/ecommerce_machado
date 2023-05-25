import {createContext, useContext, useState} from 'react';
import ItemDetails from '../components/datails/ItemDetails';

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

    function getItemQtd(){
        return itens.reduce((accumulator, currentValue) => parseInt(accumulator + currentValue.qtd), 0)
    }

    function addToCart(id, qtd){
        const cartItens = [...itens];
        const cartValid = cartItens.find((product) => product.id ===id);

        if (!cartValid) {
            cartItens.push({id:id, qtd:qtd});
        } 
        else {
            cartValid.qtd = parseInt(cartValid.qtd + qtd);
        }
        setItens(cartItens);
    }

    function removeCart(id) {
        const cartItens = [...itens];
        const cartValid = cartItens.find((product) => product.id ===id);

        if(cartValid.qtd >1){
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
     

    return(
        <CartContext.Provider value={{itens, clear, getItemQtd,addToCart,removeCart}}>
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

