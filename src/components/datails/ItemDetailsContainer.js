import React,{useState,useEffect} from "react";
import { productsDetails } from "./mockDetails/productsDetails";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore, where, query} from 'firebase/firestore';
import { useCartContext } from "../../contexts/CartContext";
//import {collection, getDocs, getFirestore} from 'firebase/firestore';


function ItemDetailsContainer(){
     const [myDetails, setMyDetails]=useState([])
     const [loading, setLoading]=useState(true)
     const {itemId}=useParams()
     //const {addToCart} = useCartContext();

    useEffect(() => {
        const db = getFirestore();

        const CardCollection = doc(db, "item", itemId);
        getDoc(CardCollection).then((prods) => {
            if (prods.exists()) {
                //const prodDet = snapshot.docs.map(prods => ({id: prods.id, ...prods.data()}))
                setMyDetails({id: prods.id, ...prods.data()});
            }
        }).finally(setLoading(false));
    },[]);

    const Item = {
        id: myDetails.id,
        preco: myDetails.preco,
        nome: myDetails.nome
    };

    /*function handleOnAdd(qtd) {
        const Item = {
            id: myDetails.id,
            qtd: qtd,
            preco: myDetails.preco,
            nome: myDetails.nome
        };
        addToCart(Item);
    }*/
    
    /*function getProductsDetails(){
       return new Promise( (resolve, rejected)=>{
            resolve(productsDetails.find(p=>p.id ===parseInt(itemId)));
        })
    }

    useEffect(()=>{
        setTimeout(()=>{
            getProductsDetails()
              .then(result => setProdDetail(result))
        setLoading(false)
        }, 2000)
    })*/

    if(loading){
        return(
            <div className="spinner-grow text-secondary spinnerListItens" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
    }
    return(
        <div>
            {/*<ItemDetails cardItem= {myDetails}/> {/*Essa é a tag original que criamos anteriormente*/}

            <ItemDetails cardItem={myDetails} /> {/*Essa é a aplicação com Firebase*/}

        </div>
    )
}
export default ItemDetailsContainer