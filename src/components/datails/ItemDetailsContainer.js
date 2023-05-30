import React,{useState,useEffect} from "react";
import { productsDetails } from "./mockDetails/productsDetails";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";


function ItemDetailsContainer(){
     const [myDetails, setMyDetails]=useState([])
     const [loading, setLoading]=useState(true)
     const {itemId}=useParams()
    
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
            <ItemDetails cardItem= {myDetails}/> 
        </div>
    )
}
export default ItemDetailsContainer