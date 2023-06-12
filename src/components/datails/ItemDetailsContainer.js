import React,{useState,useEffect} from "react";
import ItemDetails from "./ItemDetails";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore, where, query} from 'firebase/firestore';



function ItemDetailsContainer(){
    const [myDetails, setMyDetails]=useState([])
    const [loading, setLoading]=useState(true)
    const {itemId}=useParams()

    const getDataFromFirebase = async () => {
        const db = getFirestore();
        const CardCollection = doc(db, "item", `${itemId}`);
        const docSnap = await getDoc(CardCollection)

        if (docSnap.exists()) {
            setMyDetails({ ...docSnap.data(), id: itemId });
            setLoading(false)
        }
    }

    useEffect(() => {
        getDataFromFirebase()
      }, [itemId])

    if(loading){
        return(
            <div className="spinner-grow text-secondary spinnerListItens" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
    }
    return(
        <div>
            <ItemDetails cardItem={myDetails} />
        </div>
    )
}
export default ItemDetailsContainer
