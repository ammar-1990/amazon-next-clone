import { createSlice } from "@reduxjs/toolkit";
const INITIALSTATE={
    items:[]
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

        }
    }

})

export const {addToBasket,removeFromBasket,initialItems}=basketSlice.actions;
export const selectItems=(state)=>state.basket.items;
export default basketSlice.reducer