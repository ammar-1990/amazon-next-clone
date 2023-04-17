import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const INITIALSTATE={
    items:[],
    orders:[]
}

export const basketSlice=createSlice({
    name:'bakset',
    initialState:INITIALSTATE,
    reducers:{

       initialItems:(state,action)=>{
state.items=action.payload
        },
        addToBasket:(state,action)=>{
            state.items.push(action.payload)
            localStorage.setItem('items',JSON.stringify(state.items))
        },
        removeFromBasket:(state,action)=>{
const index=state.items.findIndex(item=>item.id===action.payload)
let newItems=state.items
if(index!= -1)
{
    newItems.splice(index,1)
    state.items=newItems
    localStorage.setItem('items',JSON.stringify(state.items))
}
else{
    console.warn("cant't remve item with id " + action.payload + "...")
}

        },

        resetBasket:(state)=>{
            state.items=[]
            localStorage.removeItem('items')
        },
        addToOrders:(state,action)=>{
            state.orders.push({
                id : nanoid(),
             
                date:new Date().toDateString(),
                data:state.items
            })
            
            localStorage.setItem('orders',JSON.stringify(state.orders))
        },
        initialOrders:(state,action)=>{
            state.orders=action.payload
        }
    }

})


export const selectOrders=(state)=>state.basket.orders
export const {addToBasket,removeFromBasket,initialItems,addToOrders,initialOrders,resetBasket}=basketSlice.actions;
export const selectItems=(state)=>state.basket.items;
export const selectTotal=(state)=>state.basket.items.reduce((total,item)=>total + item.price,0).toFixed(2)
export default basketSlice.reducer