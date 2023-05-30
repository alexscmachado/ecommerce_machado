import React,{useState,useEffect} from "react";
import { productsDetails } from "./mockDetails/productsDetails";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";
import {DocumentSnapshot, doc, getDoc, collection, getDocs, getFirestore, where, query} from 'firebase/firestore';
//import {collection, getDocs, getFirestore} from 'firebase/firestore';


function ItemDetailsContainer(){
     const [myDetails, setMyDetails]=useState([])
     const [loading, setLoading]=useState(true)
     const {itemId}=useParams()

     //Desafio ItemCollection - Firebase

     /*const [cardProd, setcardProd] = useState({});
     
     useEffect( () => {
       const db = getFirestore()
   
       const refDoc = doc(db,"itemDetail", "FADaOPMK6QHX3v7ffLeR")
       getDoc(refDoc).then((DocSnapshot) => {
        if(DocSnapshot.exists()){
            console.log(DocSnapshot.data())
            setcardProd({id: DocSnapshot.id, ...DocSnapshot.data()})
        }
        })}, []
    );*/

    const [ProdDetail, setProdDetail] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const CardCollection = collection(db, "item");
        //const CardCollection = query(collection(db, "item"),where("categoria","==",ProdDetail.id));
        getDocs(CardCollection).then((snapshot) => {
            if (snapshot.size > 0) {
                const prodDet = snapshot.docs.map(prods => ({id: prods.id, ...prods.data()}))
                setProdDetail(prodDet);
            }
        })
    })
    
     function getProductsDetails(){
       return new Promise( (resolve, rejected)=>{
            resolve(productsDetails.find(p=>p.id ===parseInt(itemId)));
        })
    }

    useEffect(()=>{
        setTimeout(()=>{
            getProductsDetails()
              .then(result => setMyDetails(result))
        setLoading(false)
        }, 2000)
    })
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

            {/*<ItemDetails cardItem={cardProd}/> {/*O produto Batom está aparecendo no fim da lista*/}

            <ItemDetails cardItem={ProdDetail}/> {/*Essa é a aplicação com Firebase*/}

        </div>
    )
}
export default ItemDetailsContainer