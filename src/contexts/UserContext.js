import React from "react";
import { createContext, useContext, useState } from "react";
import { productsDetails } from "../components/datails/mockDetails/productsDetails";

const cartContextProduct = createContext([{productsDetails}])

export default function CartProvider({defaultValue={}, children}){
    const [cart, setCart] = useState([])
}