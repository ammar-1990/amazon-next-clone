import { createSlice } from "@reduxjs/toolkit";
const INITIALSTATE={
    items:[]
}

export const basketSlice=createSlice({
    name:'bakset',
    initialState:INITIALSTATE,
    reducers:{
        addToBasket:(state,action)=>{},
        removeFromBasket:(state,action)=>{}
    }

})

export const {addToBasket,removeFromBasket}=basketSlice.actions;
export const selectItems=(state)=>state.basket.items;
export default basketSlice.reducer