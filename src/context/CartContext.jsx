
import { createContext,useContext,useState } from "react";

const CartContext=createContext()

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([])
    const addTocart=(product)=>{
        selectCart((prev)=>{
            const existing=prev.find((item)=>item.id===product.id)
            if(existing){

            }
            return [...prev,{...product}]
        })
    }

    return (
        <CartContext.Provider value={{ cart,setCart }}>
            {children}
        </CartContext.Provider>
    )
}