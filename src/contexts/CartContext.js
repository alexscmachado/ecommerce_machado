import {createContext, useContext, useState} from 'react';
import { productsDetails } from '../components/datails/mockDetails/productsDetails';

export const Cart = createContext([]);
export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export default function CartContextProvider({defaultValue={}, children}) {
    const [itens, setItens] = useState([]);
    
    const isInTheCart = (id) => itens.find(i => i.id === id);

    function clear(){
        setItens([]);
    }
    
    const isInTheCart = (id) => itens.find(prod => prod.id === id);

    function getItemQtd(id){
        if (itens.id ===id){
            return itens.reduce((accumulator, currentValue) => parseInt(accumulator + currentValue.qtd), 0)
        }      
    }

    const total = itens.reduce((sumTotal, p) => {
        return sumTotal +=p.qtd * parseInt(p.preco)
    },0)

    function addToCart(id, qtd){
        const cartItens = [...itens];
        const cartValid = cartItens.find((product) => product.id ===id);

        if (!cartValid) {
            cartItens.push({id: id, qtd: qtd, preco: preco, nome: nome, imagem: imagem});
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
     

    return(
        <CartContext.Provider value={{itens, clear, getItemQtd, addToCart, removeCart, isInTheCart}}>
            {children}
        </CartContext.Provider>
    )
}
