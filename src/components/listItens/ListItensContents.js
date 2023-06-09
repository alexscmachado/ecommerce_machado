import React,{useState,useEffect} from "react";
import ListItens from "./ListItens";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';


function ListItensContent(){
    const[loading, setLoading]= useState (true)
    const[filteredProducts, setFilteredProducts]=useState([])
    const {categoryId} = useParams()

   const [prodsCol, setProdsCol] = useState([]);

   useEffect(() => {
    const db = getFirestore()

    const ItemCollection = collection(db, "item")
    getDocs(ItemCollection).then((snapshot) => {
        if (snapshot.size > 0) {
            const myProducts = snapshot.docs.map((prod) => ({
                id: prod.id,
                ... prod.data(),
            }))
            setProdsCol(myProducts);
            setLoading(false)
        }
    })
   },[])

   useEffect(() => {
    if (categoryId) {
        const result = prodsCol.filter((p) => p.categoryId === categoryId)
        setFilteredProducts(result)
    }
   }, [categoryId, prodsCol])
    
    if(loading){
        return(
            <div className="spinner-grow text-secondary spinnerListItens" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
        
    }

    return(   
        <div className="itemContainerList">
           <ListItens itens={categoryId ? filteredProducts : prodsCol} /> {/*Essa é a aplicação com Firebase*/}
        </div>
    )
}
export default ListItensContent

