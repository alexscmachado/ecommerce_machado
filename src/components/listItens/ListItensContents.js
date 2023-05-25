import React,{useState,useEffect} from "react";
import { produtos } from "./mock/produtos";
import ListItens from "./ListItens";
import { useParams } from "react-router-dom";
//import {DocumentSnapshot, doc, getDoc, getFirestore} from 'firebase/firestore';
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore';
import Itens from "./Itens";


// const BatomImage = new URL("./batom.png", import.meta.url)

function ListItensContent(){
    const[loading, setLoading]= useState (true)
    const[allMyProducts,setAllMyProducts]=useState([])
    const[filteredProducts, setFilteredProducts]=useState([])
    const {categoryId} = useParams()
    
   //Desafio ItemCollection - Firebase I
   
   /*const [prodCollection, setprodCollection] = useState({});

    useEffect( () => {
       const db = getFirestore()
   
       const refDoc = doc(db,"item", "7baGlSZEYjeYnVeTR7h4")
       getDoc(refDoc).then((DocSnapshot) => {
        if(DocSnapshot.exists()){
            console.log(DocSnapshot.data())
            setprodCollection({id: DocSnapshot.id, ...DocSnapshot.data()})
        }
        })}, []
   );*/

   const [prodsCol, setProdsCol] = useState([]);

   useEffect(() => {
    setTimeout(() => {
        const db = getFirestore();

        const ItemCollection = collection(db, "item");
        getDocs(ItemCollection).then((snapshot) => {
        if (snapshot.size > 0) {
            const myProducts = snapshot.docs.map(prod => ({id: prod.id, ...prod.data()}))
            setProdsCol(myProducts);
        }})
    }, 2000);    
   },[]);

    function getProdutos(){
        return new Promise( (resolve, rejected) =>{
            resolve(prodsCol)
        })
    }

    useEffect(
        ()=>{
            setTimeout(()=>{
                getProdutos()
                      .then(result => {setAllMyProducts(result);setFilteredProducts(result)})
                     setLoading(false)
            },2000); 
        },[]
    )
    useEffect(
        ()=>{
            if(categoryId){
                setFilteredProducts(allMyProducts.filter(p => p.categoryId===categoryId))
            }else{
                setFilteredProducts(allMyProducts)
            }
        },[categoryId]  
    );
    
    if(loading){
        return(
            <div className="spinner-grow text-secondary spinnerListItens" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
        
    }

    return(   
        <div className="itemContainerList">
           {/*<ListItens itens ={filteredProducts}/> {/*Essa é a tag original que criamos anteriormente*/}

           {/*<Itens item={prodCollection}/> {/*O produto Batom está aparecendo no fim da lista*/}

           <ListItens itens={prodsCol} /> {/*Essa é a aplicação com Firebase*/}
        </div>
    )
}
export default ListItensContent

