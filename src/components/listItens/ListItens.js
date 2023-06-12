import React from "react"
import Itens from "./Itens"


function ListItens ({itens}){
    return (itens.map((p)=>
        <ul><Itens key={p.id} item={p}/></ul>   
    )) 
 }
 export default ListItens
