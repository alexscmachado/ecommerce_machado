import React from "react";
import { Link } from "react-router-dom";


function Itens({ item }) {
    return (
           <div className="itemContainer">
                <li className="cardItemList">
                <div className="cardItem">
                    <img src= {item.imagem} className="card-img-top cardImage" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.nome}</h5>
                            <p className="card-text">{item.descricao}</p>
                            <p> R$ {item.preco}</p>
                            <Link to={`/item/${item.id}`} className="btn btn-primary">Detalhes</Link>
                        </div>
                </div>
                </li>
            </div>
    )
}
export default Itens
